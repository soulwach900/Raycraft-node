import ray from "raylib";

export const camera = {
  position: ray.Vector3(10.0, 10.0, 10.0),
  target: ray.Vector3(0.0, 0.0, 0.0),
  up: ray.Vector3(0.0, 1.0, 0.0),
  fovy: 45.0,
  projection: ray.CAMERA_PERSPECTIVE,
};

export function UpdateCameraLocal() {
  ray.UpdateCamera(camera, ray.CAMERA_ORBITAL);
}
