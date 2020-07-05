import { RouterModule, Routes } from "@angular/router";

// PAGINA WEB
import { PwComponent } from "../components/pw/pw.component";
// Log In
import { LogInSWComponent } from "../components/sw/log-in-sw/log-in-sw.component";

// perfil
import { AdministradorComponent } from "../components/sw/user_types/administrador/administrador.component";
// SERVICIOS
import { AuthGuardService } from "../../services/auth-guard.service";
import { ServiciosComponent } from '../components/pw/servicios/servicios.component';

const routes: Routes = [
  { path: "", component: PwComponent },
  { path: "login", component: LogInSWComponent },
  { path: "Home", component: PwComponent },
  {
    path: "AdminProfile",
    component: AdministradorComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "services",
    component: ServiciosComponent,
    canActivate: [AuthGuardService],
  },
  { path: "**", component: PwComponent },
];

export const APP_ROUTES = RouterModule.forRoot(routes);
