import React from "react";

import SidebarAdmin from "./SidebarAdmin";
import TablesUser from "./user/TablesUser";
import Container from "@material-ui/core/Container";
import TransitionsModal from "./user/TransitionModal";
import {Route, Switch} from "react-router";
import {ADMIN} from "../../../rote";
import UserInfo from "./user/UserInfo";
import ProductsInfo from "./products/ProductsInfo";
import CategoriesInfo from "./categories/CategoriesInfo";

function AdminPage() {
  return (
    <div>
      <SidebarAdmin />
      <Container maxWidth="sm">
        <Switch>
          <Route path={ADMIN + "/users"}>
            <UserInfo />
          </Route>
          <Route path={ADMIN + "/products"}>
            <ProductsInfo />
          </Route>
          <Route path={ADMIN + "/categories"}>
            <CategoriesInfo />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default AdminPage;
