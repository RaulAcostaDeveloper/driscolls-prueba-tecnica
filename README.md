# driscolls-prueba-tecnica
Prueba técnica para driscolls

## ver en vivo a través de Vercel
https://driscolls-prueba-tecnica-zeta.vercel.app

## correr el proyecto
1._ Clonar el proyecto
$ git clone https://github.com/RaulAcostaDeveloper/driscolls-prueba-tecnica.git
2._ Correr el puerto de compilación
$ npm run dev
http://localhost:3000/

## compilar sass
Para compilar sass, usar el siguiente comando
$npm run build:css

## creación del proyecto
$ npx create-next-app@latest driscolls-prueba-tecnica --typescript --use-npm
$ npm install sass
$ git branch -m main
Add in package.json
"build:css": "sass ./src/input.scss ./src/output.css"

## Versiones
"next": "14.1.4",
"react": "^18",
"react-dom": "^18",
"sass": "^1.72.0"
"typescript": "^5"
