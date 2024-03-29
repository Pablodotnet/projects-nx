import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ValidateTokenGuard } from "@projects/helper";

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule),
        canActivate: [ValidateTokenGuard],
        canLoad: [ValidateTokenGuard]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule {}