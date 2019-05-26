import { HttpService, HttpServiceType } from "./HttpService";
import { UserService } from "./user/UserService";
import UserServiceMock from "./user/UserServiceMock";

export const USE_MOCK = true;

const services = [
  [UserService, USE_MOCK ? UserServiceMock : UserService],
];

const serviceConfig = new Map<HttpServiceType, HttpService>();

services.forEach((item) => {
  serviceConfig.set(item[0], new item[1]());
});

export function useApiService<T extends HttpServiceType>(serviceType: T) {
  return serviceConfig.get(serviceType)! as InstanceType<T>;
}
