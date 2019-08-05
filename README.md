# SensorBot
Simula los sensores para el ejercicio de Atix, agendando envíos request post al servidor cada 250ms, para 4 sensores. La idea era ver si las decisiones que tomé para armar la app generaban un uso desdemedido de recursos y no. El mayor impacto lo genera el diplay del log de todos las lecturas.  

Utilicé una función que supuestamente envia valores con distribución normal pero no la respeta, tuve que usar un desvío muy grande, pero sirve para el ejecicio. (Fuente https://gist.github.com/bluesmoon/7925696) 