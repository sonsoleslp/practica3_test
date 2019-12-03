# autoCOREctor

* Corrector de la práctica especial.
* Para ejecutar el corrector el alumno debe proveer su email de alumno (acabado en @alumnos.upm.es) y to token de Moodle (Se obtiene del perfil de Moodle //TODO)

* En primer lugar debe instalar todos los paquetes necesarios para ejecutar la práctica y el corrector
```
npm install
```
* Para ejecutar el corrector y obtener feedback local sobre su desarrollo ejecute el siguiente comando según el sistema operativo en el que se encuentre:
```
./bin/corrector-linux
./bin/corrector-macos
.\bin\corrector-win.exe
```
* Para subir su práctica y su nota a Moodle ejecute el siguiente comando según el sistema operativo en el que se encuentre:
```
./bin/corrector-linux upload
./bin/corrector-macos upload
.\bin\corrector-win.exe upload
```
