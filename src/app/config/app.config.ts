import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProjectGateway } from '../domain/model/gateway/project-gateway';
import { ProjectAdapterService } from '../infraestructure/driven-adapter/project-adapter.service';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()), // utiliza fetch para hacer las peticiones http
    provideAnimationsAsync(), // provee las animaciones de angular
    { provide: ProjectGateway, useClass: ProjectAdapterService }, // inyecta la clase ProjectAdapterService en la clase abstracta ProjectGateway, para poder hacer uso de los metodos de la clase ProjectAdapterService
  ]
};
