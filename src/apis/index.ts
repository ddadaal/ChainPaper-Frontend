import { HttpService, HttpServiceType } from "./HttpService";
import { UserService } from "./user/UserService";
import UserServiceMock from "./user/UserServiceMock";
import { PaperServiceMock } from "./paper/PaperServiceMock";
import { PaperService } from "./paper/PaperService";
import { CollabrationService } from "./collabration/CollabrationService";
import { CollabrationServiceMock } from "./collabration/CollabrationServiceMock";

export const USE_MOCK = false;

const services = [
  [UserService, USE_MOCK ? UserServiceMock : UserService],
  [PaperService, USE_MOCK ? PaperServiceMock : PaperService],
  [CollabrationService, USE_MOCK ? CollabrationServiceMock : CollabrationService],
];


const serviceConfig = new Map<HttpServiceType, HttpService>();

services.forEach((item) => {
  serviceConfig.set(item[0], new item[1]());
});

export function getApiService<T extends HttpServiceType>(serviceType: T) {
  return serviceConfig.get(serviceType)! as InstanceType<T>;
}

