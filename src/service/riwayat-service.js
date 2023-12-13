import { prismaClient } from "../application/database.js";
import { validate } from "../validation/validation.js";
import { ResponseError } from "../error/response-error.js";
import {
  createRiwayatValidation,
  getRiwayatValidation,
  getUserValidation,
  updateRiwayatValidation,
} from "../validation/riwayat-validation.js";
import { logger } from "../application/logging.js";

const create = async (request) => {
  const data = validate(createRiwayatValidation, request);

  const validateKata = await prismaClient.kata.count({
    where: {
      id: data.id_kata,
    },
  });

  if (validateKata !== 1) {
    throw new ResponseError(404, "No kata found");
  }

  const validateRiwayat = await prismaClient.riwayatbelajar.count({
    where: {
      id_kata: data.id_kata,
      id_user: data.id_user,
    },
  });

  if (validateRiwayat === 1) {
    throw new ResponseError(400, "Cannot create double riwayat");
  }

  if (data.url_video === undefined) {
    data.url_video = null;
  }

  return prismaClient.riwayatbelajar.create({
    data: data,
    select: {
      status: true,
      url_video: true,
      id_kata: true,
    },
  });
};

const update = async (request) => {
  const data = validate(updateRiwayatValidation, request);

  const validateUser = await prismaClient.user.count({
    where: {
      id: data.id_user,
    },
  });

  if (validateUser !== 1) {
    throw new ResponseError(404, "User is not found");
  }

  const validateKata = await prismaClient.kata.count({
    where: {
      id: data.id_kata,
    },
  });

  if (validateKata !== 1) {
    throw new ResponseError(404, "Kata is not found");
  }

  const validateRiwayat = await prismaClient.riwayatbelajar.count({
    where: {
      id_user: data.id_user,
      id_kata: data.id_kata,
    },
  });

  if (validateRiwayat !== 1) {
    throw new ResponseError(404, "Riwayat is not found");
  }

  const data2 = {};

  if (data.url_video) {
    data2.url_video = data.url_video;
  }

  if (data.status !== undefined) {
    data2.status = data.status;
  }

  const riwayat = await prismaClient.riwayatbelajar.findFirst({
    where: {
      id_user: data.id_user,
      id_kata: data.id_kata,
    }
  });


  return prismaClient.riwayatbelajar.update({
    where: {
      id: riwayat.id
    },
    data: data2,
    select: {
      status: true,
      url_video: true,
      id_kata: true,
    },
  });
};

const deleteByIdKata = async (request) => {
  const data = validate(getRiwayatValidation, request);

  const validateUser = await prismaClient.user.count({
    where: {
      id: data.id_user,
    },
  });

  if (validateUser !== 1) {
    throw new ResponseError(404, "User is not found");
  }

  const validateKata = await prismaClient.kata.count({
    where: {
      id: data.id_kata,
    },
  });

  if (validateKata !== 1) {
    throw new ResponseError(404, "Kata is not found");
  }

  const riwayat = await prismaClient.riwayatbelajar.findFirst({
    where: {
      id_user: data.id_user,
      id_kata: data.id_kata,
    },
    select: { id: true },
  });

  return prismaClient.riwayatbelajar.delete({
    where: {
      id: riwayat.id,
    },
  });
};

const get = async (request) => {
  const data = validate(getUserValidation, request);

  return prismaClient.riwayatbelajar.findMany({
    where: {
      id_user: data,
    },
    select: {
      status: true,
      url_video: true,
      id_kata: true,
    },
  });
};

const getByIdKata= async (request) => {
  const data = validate(getRiwayatValidation, request);

  const validateUser = await prismaClient.user.count({
    where: {
      id: data.id_user,
    },
  });

  if (validateUser !== 1) {
    throw new ResponseError(404, "User is not found");
  }

  const validateRiwayat = await prismaClient.riwayatbelajar.count({
    where: {
      id_user: data.id_user,
      id_kata: data.id_kata,
    },
  });

  if (validateRiwayat !== 1) {
    throw new ResponseError(404, "Riwayat is not found");
  }
  
  const validateKata = await prismaClient.kata.count({
    where: {
      id: data.id_kata,
    },
  });

  if (validateKata !== 1) {
    throw new ResponseError(404, "Kata is not found");
  }
  

  return prismaClient.riwayatbelajar.findFirst({
    where: {
      id_user: data.id_user,
      id_kata: data.id_kata,
    },select: {
      status: true,
      url_video: true,
      id_kata: true,
    },
  })
}

export default {
  create,
  update,
  deleteByIdKata,
  get,
  getByIdKata,
};
