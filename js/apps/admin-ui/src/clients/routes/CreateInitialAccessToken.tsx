import { lazy } from "react";
import type { Path } from "react-router-dom";
import { generatePath } from "react-router-dom";
import type { AppRouteObject } from "../../routes";

export type CreateInitialAccessTokenParams = { realm: string };

const CreateInitialAccessToken = lazy(
  () => import("../initial-access/CreateInitialAccessToken"),
);

export const CreateInitialAccessTokenRoute: AppRouteObject = {
  path: "/:realm/clients/initialAccessToken/create",
  element: <CreateInitialAccessToken />,
  breadcrumb: (t) => t("createToken"),
  handle: {
    access: "manage-clients",
  },
};

export const toCreateInitialAccessToken = (
  params: CreateInitialAccessTokenParams,
): Partial<Path> => ({
  pathname: generatePath(CreateInitialAccessTokenRoute.path, params),
});
