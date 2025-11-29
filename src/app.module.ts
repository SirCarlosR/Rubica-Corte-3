import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PlataformasModule } from './plataformas/plataformas.module';
import { PeliculasModule } from './peliculas/peliculas.module';
import { FavoritasModule } from './favoritas/favoritas.module';
import { MisplataformasModule } from './misplataformas/misplataformas.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    PrismaModule,
    UsuariosModule,
    PlataformasModule,
    PeliculasModule,
    FavoritasModule,
    MisplataformasModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
