import ray from "raylib";
import DrawCubeTexture from "../utils/CubeTexture.js";
import NoiseLib from "noisejs";

const worldX = 25;
const worldY = 5;
const worldZ = 25;

const noise = new NoiseLib.Noise(Math.random());

// Cria o mundo com blocos em todas as posições
const world = [];
for (let x = 0; x < worldX; x++) {
  world[x] = [];
  for (let y = 0; y < worldY; y++) {
    world[x][y] = [];
    for (let z = 0; z < worldZ; z++) {
      world[x][y][z] = true; // bloco presente
    }
  }
}

// Verifica se o bloco está cercado por outros blocos
function isSurrounded(x, y, z) {
  const neighbors = [
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1],
  ];

  for (const [dx, dy, dz] of neighbors) {
    const nx = x + dx;
    const ny = y + dy;
    const nz = z + dz;

    if (
      nx < 0 ||
      nx >= worldX ||
      ny < 0 ||
      ny >= worldY ||
      nz < 0 ||
      nz >= worldZ ||
      !world[nx][ny][nz]
    ) {
      return false;
    }
  }

  return true;
}

// Função de desenho
export default function DrawWorld() {
  const grass = ray.LoadTexture("./assets/gfx/grass_block_top_item.png");

  for (let x = 0; x < worldX; x++) {
    for (let y = 0; y < worldY; y++) {
      for (let z = 0; z < worldZ; z++) {
        if (!world[x][y][z]) continue;
        if (isSurrounded(x, y, z)) continue;

        const pos = ray.Vector3(x, y, z);
        DrawCubeTexture(grass, pos, 1, 1, 1, ray.WHITE);
      }
    }
  }
}