<template>
    <div class="bubble_container" ref="container">
      <canvas ref="canvas" class="ball-canvas"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onUnmounted, watch ,computed,onMounted} from 'vue';
  import { useElementSize, useDebounceFn } from '@vueuse/core';
  
  const canvas = ref(null);
  const container = ref(null);
  let animationFrameId = null;
  let ballIntervalId = null;
  const balls = [];



  var props = defineProps(['img_width']);

  var main_size = computed(()=>props.img_width.value/4)

  var bubble_color = ()=>'#00F0FF'

  onMounted(() => {
        restartAnimation();  // 确保在组件挂载后立即启动动画
    });

  
  const { width, height } = useElementSize(container);
  
  function createBall(centerX, centerY, initial = false) {
    const numberOfBalls = initial ? 10 : Math.floor(Math.random() * 4) + 2;
    for (let i = 0; i < numberOfBalls; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 3.5;
        const distance = initial ? main_size.value + 5 : 0; // 初始时在大球边缘，后续在中心
        const size = Math.random() * (main_size.value / 2 - 20) + 20;

        const initialX = centerX + distance * Math.cos(angle);
        const initialY = centerY + distance * Math.sin(angle);

        const velocityX = Math.cos(angle) * speed;
        const velocityY = Math.sin(angle) * speed;

        balls.push({
            x: initial ? initialX : centerX, // 初始位置，如果非初始则在中心
            y: initial ? initialY : centerY,
            radius: size,
            velocityX: velocityX,
            velocityY: velocityY
        });
    }
}
  
  function update(ctx, centerX, centerY) {
      console.log(main_size.value)
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.beginPath();
      ctx.arc(centerX, centerY, main_size.value, 0, Math.PI * 2);
      ctx.fillStyle = bubble_color();
      ctx.fill();
      ctx.closePath();
  
      balls.forEach(ball => {
          ctx.beginPath();
          ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
          ctx.fillStyle = bubble_color();
          ctx.fill();
          ctx.closePath();
  
          ball.x += ball.velocityX;
          ball.y += ball.velocityY;
      });
  
      animationFrameId = requestAnimationFrame(() => update(ctx, centerX, centerY));
  }
  
  function restartAnimation() {
    balls.length = 0;
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
    if (ballIntervalId) {
        clearInterval(ballIntervalId);
    }
    const ctx = canvas.value.getContext('2d');
    canvas.value.width = width.value;
    canvas.value.height = height.value;
    const centerX = width.value / 2;
    const centerY = height.value / 2;
    createBall(centerX, centerY, true); // 初始调用
    ballIntervalId = setInterval(() => createBall(centerX, centerY), 200);
    update(ctx, centerX, centerY);
}
  
  const debouncedRestart = useDebounceFn(restartAnimation, 500);
  
  watch([width, height], debouncedRestart);
  
  onUnmounted(() => {
      if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
      }
      if (ballIntervalId) {
          clearInterval(ballIntervalId);
      }
  });
  </script>
  
  <style>
  .bubble_container {
    width: 100%;
    height: 120%;
    filter:contrast(20);
    position:relative;
    top:-10%;
    transform: translateY(50px);
  }
  .ball-canvas {
    display: block;
    background-color: #171819;
    width: 100%;
    height: 100%;
    filter:blur(15px)
  }
  </style>