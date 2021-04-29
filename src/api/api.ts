import axios, { AxiosResponse } from "axios";

import { PostType } from "../model/types";

const instance = axios.create({
  baseURL: "https://online-course-todo.herokuapp.com/api/v1/",
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
};

export const Post = {
  getPosts: (): Promise<PostType[]> => requests.get("todos"),
  getAPost: (id: number): Promise<PostType> => requests.get(`posts/${id}`),
};
