# Instalar XCode

- Para ver las maquinas virtuales 
la ruta : window -> Devices and Simulators

# Comprobar la version Ruby
 ruby --version 

# Instalar cocaapods

Con el comando : sudo gem install cocoapods

# El aplicativo web

- ionic build

# Compilar a un app IOS

- ionic capacitor add ios (Con este comando se nos genera un aplicación IOS)

# Abrirlo en Xcode

- ionic capacitor open ios

# Para los mac con arquitectura ARM (M1, M1pro, M1max, M2)
# Necesitamos Instalar esta gema

- sudo arch -x86_64 gem install ffi

# Identificar la carperta IOS (HASTA EL MOMENTO ESTA MARCANDO ERROR)

ios -> App ( Ionic/fundamentos-ionic/ios/App)

Una ubicamos en App instalamos lo siguiente : arch -x86_64 pod install

Despues tenemos que volver a la carperta del proyecto que para este caso seria fundamentos-ionic

cd ..  y luego cd .. Ionic/fundamentos-ionic

Una vez ubicados en fundamentos-ionic ejecutamos el comando

npx cap sync (realizamos la sincronización)

# Abrirlo en Xcode

- ionic capacitor open ios

En xcode seleccionan el emulador y le damos a "play"


## live reloading

- ionic capacitor run ios -l --external