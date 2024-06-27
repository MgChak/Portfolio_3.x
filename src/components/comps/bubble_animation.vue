<template>
  <div class="bubble_container" ref="container">
    <canvas ref="canvas" class="ball-canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onUnmounted, watch, computed, onMounted } from 'vue';
import { useElementSize, useDebounceFn } from '@vueuse/core';

const canvas = ref(null);
const container = ref(null);
let animationFrameId = null;
let ballIntervalId = null;
const ballsTop = []; // Top layer balls
const ballsBottom = []; // Bottom layer balls

var props = defineProps(['img_width']);
var main_size = computed(() => props.img_width.value / 4);

// Colors for each layer
var bubble_color_top = '#00F0FF'; // Top layer color
var bubble_color_bottom = '#120DFF'; // Bottom layer color

onMounted(() => {
  restartAnimation(); // Ensure animation starts immediately after component is mounted
});

const { width, height } = useElementSize(container);

function createBall(centerX, centerY, initial = false, isBottomLayer = false) {
  const numberOfBalls = initial ? 10 : Math.floor(Math.random() * 4) + 2;
  const ballsArray = isBottomLayer ? ballsBottom : ballsTop;
  const speedFactor = isBottomLayer ? 3.5 : 2.5; // 底部小球速度
  const sizeFactor = isBottomLayer ? 0.8 : 1; // 底部小球尺寸
  for (let i = 0; i < numberOfBalls; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = speedFactor;
    const distance = initial ? main_size.value + 5 : 0;
    const size = (Math.random() * (main_size.value / 1.8 - 20) + 20) * sizeFactor;

    const initialX = centerX + distance * Math.cos(angle);
    const initialY = centerY + distance * Math.sin(angle);

    const velocityX = Math.cos(angle) * speed;
    const velocityY = Math.sin(angle) * speed;

    ballsArray.push({
      x: initial ? initialX : centerX,
      y: initial ? initialY : centerY,
      radius: size,
      velocityX: velocityX,
      velocityY: velocityY
    });
  }
}

function update(ctx, centerX, centerY) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // 双层小球
  [ballsTop, ballsBottom].forEach((ballsArray, index) => {
    const bubbleColor = index === 0 ? bubble_color_top : bubble_color_bottom;
    ballsArray.forEach(ball => {
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = bubbleColor;
      ctx.fill();
      ctx.closePath();

      ball.x += ball.velocityX;
      ball.y += ball.velocityY;
    });
  });


   // 绘制位于中心位置且不动的大球
   ctx.beginPath();
    ctx.arc(centerX, centerY, main_size.value, 0, Math.PI * 2);
    ctx.fillStyle = bubble_color_top;  // 选择中心大球的颜色
    ctx.fill();
    ctx.closePath();

  
  animationFrameId = requestAnimationFrame(() => update(ctx, centerX, centerY));
}

function restartAnimation() {
  ballsTop.length = 0;
  ballsBottom.length = 0;
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
  createBall(centerX, centerY, true, false); // Initial call for top layer
  createBall(centerX, centerY, true, true); // Initial call for bottom layer
  ballIntervalId = setInterval(() => {
    createBall(centerX, centerY, false, false);
    createBall(centerX, centerY, false, true);
  }, 200);
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
  filter: contrast(20);
  position: relative;
  top: -10%;
  transform: translateY(50px);
}
.ball-canvas {
  display: block;
  background-color: #171819;
  width: 100%;
  height: 100%;
  filter: blur(15px);
}
</style>