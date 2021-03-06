import { DEFAULT_PAGINATION_LIMIT } from 'config';
import {
  ApiList,
  Comment,
  PaginationConfig,
  PostPreview,
  UserFull,
  UserPreview,
} from 'models/interfaces';
import httpService from 'services/http.service';
import { buildRequestParams } from './helpers';

export function getUsers(config?: PaginationConfig) {
  const { page, limit = DEFAULT_PAGINATION_LIMIT } = config ?? {};

  const requestParams = buildRequestParams({ page, limit });

  return httpService.get<ApiList<UserPreview>>(`/user${requestParams}`);
}

export function getUserPosts(userId: string, config?: PaginationConfig) {
  const { page, limit = DEFAULT_PAGINATION_LIMIT } = config ?? {};

  const requestParams = buildRequestParams({ page, limit });

  return httpService.get<ApiList<PostPreview>>(`user/${userId}/post${requestParams}`);
}

export function getUser(userId: string) {
  return httpService.get<UserFull>(`user/${userId}`);
}

export function getComments(postId: string) {
  return httpService.get<ApiList<Comment>>(`post/${postId}/comment?limit=1`);
}
export function getTagPosts(tag: string, config?: PaginationConfig) {
  const { page, limit = DEFAULT_PAGINATION_LIMIT } = config ?? {};

  const requestParams = buildRequestParams({ page, limit });

  return httpService.get<ApiList<PostPreview>>(`tag/${tag}/post/${requestParams}`);
}
