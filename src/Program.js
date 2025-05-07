import ray from "raylib";
import DrawWorld from "./functional/VoxelEngine.js";
import { UpdateCameraLocal, camera } from "./Player.js";

const wmWidth = 800;
const wmHeight = 600;

function Start() {
  ray.InitWindow(wmWidth, wmHeight, "main window .JS");
  ray.SetTargetFPS(60);

  Update();
}

function Update() {
  while (!ray.WindowShouldClose()) {
    UpdateCameraLocal();

    ray.BeginDrawing();

    Draw2d();

    ray.BeginMode3D(camera);

    Draw3d();

    ray.EndMode3D();

    ray.EndDrawing();
  }

  ray.CloseWindow();
}

function Draw2d() {
  ray.ClearBackground(ray.WHITE);
  ray.DrawFPS(0, 0);
}

function Draw3d() {
  DrawWorld();
}

// inicializador
Start();
