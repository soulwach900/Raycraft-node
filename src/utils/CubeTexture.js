import ray from "raylib";

export default function DrawCubeTexture(texture, position, width, height, length, color) {
  const x = position.x;
  const y = position.y;
  const z = position.z;

  ray.rlSetTexture(texture.id);

  ray.rlBegin(ray.RL_QUADS);
  ray.rlColor4ub(color.r, color.g, color.b, color.a);

  // Front face
  ray.rlNormal3f(0.0, 0.0, 1.0);
  ray.rlTexCoord2f(0.0, 0.0);
  ray.rlVertex3f(x - width / 2, y - height / 2, z + length / 2);
  ray.rlTexCoord2f(1.0, 0.0);
  ray.rlVertex3f(x + width / 2, y - height / 2, z + length / 2);
  ray.rlTexCoord2f(1.0, 1.0);
  ray.rlVertex3f(x + width / 2, y + height / 2, z + length / 2);
  ray.rlTexCoord2f(0.0, 1.0);
  ray.rlVertex3f(x - width / 2, y + height / 2, z + length / 2);

  // Back face
  ray.rlNormal3f(0.0, 0.0, -1.0);
  ray.rlTexCoord2f(1.0, 0.0);
  ray.rlVertex3f(x - width / 2, y - height / 2, z - length / 2);
  ray.rlTexCoord2f(1.0, 1.0);
  ray.rlVertex3f(x - width / 2, y + height / 2, z - length / 2);
  ray.rlTexCoord2f(0.0, 1.0);
  ray.rlVertex3f(x + width / 2, y + height / 2, z - length / 2);
  ray.rlTexCoord2f(0.0, 0.0);
  ray.rlVertex3f(x + width / 2, y - height / 2, z - length / 2);

  // Top face
  ray.rlNormal3f(0.0, 1.0, 0.0);
  ray.rlTexCoord2f(0.0, 1.0);
  ray.rlVertex3f(x - width / 2, y + height / 2, z - length / 2);
  ray.rlTexCoord2f(0.0, 0.0);
  ray.rlVertex3f(x - width / 2, y + height / 2, z + length / 2);
  ray.rlTexCoord2f(1.0, 0.0);
  ray.rlVertex3f(x + width / 2, y + height / 2, z + length / 2);
  ray.rlTexCoord2f(1.0, 1.0);
  ray.rlVertex3f(x + width / 2, y + height / 2, z - length / 2);

  // Bottom face
  ray.rlNormal3f(0.0, -1.0, 0.0);
  ray.rlTexCoord2f(1.0, 1.0);
  ray.rlVertex3f(x - width / 2, y - height / 2, z - length / 2);
  ray.rlTexCoord2f(0.0, 1.0);
  ray.rlVertex3f(x + width / 2, y - height / 2, z - length / 2);
  ray.rlTexCoord2f(0.0, 0.0);
  ray.rlVertex3f(x + width / 2, y - height / 2, z + length / 2);
  ray.rlTexCoord2f(1.0, 0.0);
  ray.rlVertex3f(x - width / 2, y - height / 2, z + length / 2);

  // Right face
  ray.rlNormal3f(1.0, 0.0, 0.0);
  ray.rlTexCoord2f(1.0, 0.0);
  ray.rlVertex3f(x + width / 2, y - height / 2, z - length / 2);
  ray.rlTexCoord2f(1.0, 1.0);
  ray.rlVertex3f(x + width / 2, y + height / 2, z - length / 2);
  ray.rlTexCoord2f(0.0, 1.0);
  ray.rlVertex3f(x + width / 2, y + height / 2, z + length / 2);
  ray.rlTexCoord2f(0.0, 0.0);
  ray.rlVertex3f(x + width / 2, y - height / 2, z + length / 2);

  // Left face
  ray.rlNormal3f(-1.0, 0.0, 0.0);
  ray.rlTexCoord2f(0.0, 0.0);
  ray.rlVertex3f(x - width / 2, y - height / 2, z - length / 2);
  ray.rlTexCoord2f(1.0, 0.0);
  ray.rlVertex3f(x - width / 2, y - height / 2, z + length / 2);
  ray.rlTexCoord2f(1.0, 1.0);
  ray.rlVertex3f(x - width / 2, y + height / 2, z + length / 2);
  ray.rlTexCoord2f(0.0, 1.0);
  ray.rlVertex3f(x - width / 2, y + height / 2, z - length / 2);

  ray.rlEnd();

  ray.rlSetTexture(0);
}
