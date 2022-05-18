# Desafío para Software Engineers

Nombre postulante: [ Carlos Mario Toro Martinez]
Link a la app en producción: [https://transcendent-malabi-fe52e4.netlify.app/]

"La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario (y porque nos gusta pensar en Kimche como un Ferrari). ¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc."

R. La manera mas sencilla de optimizar esta busqueda de datos es aplicar la normalizacion ya que se podria organizar el horario en diferentes tablas relacionadas las cuales disminuirian considerablemente la cantidad de registros que la DB nos brinda, en caso de que se haya cumplido todas las formas normales en el diseño de la base de datos se puede tambien realizar consultas mas optimas como por ejemplo usar un join en lugar de select.

