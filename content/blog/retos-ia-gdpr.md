---
title: Ética y legalidad en aplicaciones basadas en inteligencia artificial
description: Learn how to style Angular applications with Tailwind CSS
published: true
publishedAt: 2020-09-13T08:55:00.000Z
updatedAt: 2020-09-13T08:55:00.000Z
tags:
  - Inteligencia artificial
keywords:
  - Utility-First CSS
authors:
  - Javier Peralta
github: https://github.com/notiz-dev/angular-tailwindcss
---

# Introducción

En la Unión Europea (UE), la protección de los datos personales es un derecho fundamental. No obstante, el GDPR no es el primer reglamento que protege los datos de los usuarios, sino que se trata de una evolución de la [Directiva de Protección de Datos](https://eur-lex.europa.eu/legal-content/ES/TXT/PDF/?uri=CELEX:31995L0046&from=EN) de 1995.

Aquella directiva no estuvo exenta de problemas. Cada estado miembro debía implementar la ley de forma independiente, lo que hizo que ciertos países se comportaran de forma oportunista para atraer a las grandes compañías tecnológicas con un marco legal más *laxo* y esquemas fiscales ventajosos.

El GDPR es el resultado de intentar dar solución a estos y otros problemas. En 2009 se empezó a consultar a expertos y la Comisión Europea publicó una primera propuesta en 2012. Dos años más tarde, el Parlamento Europeo adoptó una carta de compromiso compuesta por más de 4000 enmiendas propuestas. El Consejo de la Unión Europea publicó la primera propuesta del GDPR en 2015 para así poder comenzar las negociaciones con el Parlamento Europeo. El acuerdo sobre la versión final del texto se produjo en diciembre de 2015 pero, aunque formalizada y publicada en abril de 2016, no fue hasta mayo de 2018 cuando entró en vigor.

Ahora que el GDPR es de obligado cumplimiento, su interpretación se confía a los correspondientes tribunales de los estados miembro y a la recién creada Junta Europea de Protección de Datos, siendo la interpretación de esta última no vinculante. Por último y, como ocurre con otras leyes europeas, el Tribunal de Justicia de la Unión Europea (TJUE) es la máxima autoridad a la hora de interpretar el derecho de la Unión Europea.


# Reglamento general de protección de datos

Como en la directiva de 1995, el primer artículo del GDPR subraya el objetivo dual de promover un intercambio libre de información personal en la Unión Europea y proteger los datos personales de sus ciudadanos, haciendo énfasis en la privacidad de estos.

El reglamento proporciona definiciones que permiten unificar y armonizar el amalgama de entidades y actores que participan de una manera u otra en el tratamiento de datos. Además, otorga una serie de derechos al ciudadano en relación a sus datos personales.

1. Protección de datos *por defecto*.  Los únicos datos que deberían ser procesados y almacenados por un tiempo limitado son aquellos que son estrictamente necesarios para el funcionamiento de la plataforma. Estos solo deberían de ser accesibles por un limitado número de personas autorizadas y es el usuario quien decide si sus datos son accesibles públicamente o no. Las empresas están obligadas a asegurar un nivel de seguridad elevado en lo concerniente a los datos de sus usuarios y tener en cuenta los posibles riesgos asociados a los datos que poseen.
2. Derecho a conocer el procesado de los datos. El usuario tiene derecho a recibir una información clara sobre qué datos son utilizados por la compañía y la finalidad de estos.
3. Derecho de objeción. El usuario siempre tendrá derecho a negarse si una compañía procesa sus datos con el propósito de mostrarle publicidad personalizada.
4. Derecho a acceder a la información. El usuario debe poder acceder a sus datos personales de forma gratuita y obtener una copia de estos en un formato electrónico estándar.
5. Derecho a ser informado de filtraciones. La compañía está obligada a informar a la correspondiente autoridad -en España, la Agencia Española de Protección de Datos (AEPD) si ha habido filtración de datos. De tratarse de una filtración de información sensible, el usuario tiene derecho a ser informado personalmente.
6. Derecho al *olvido*. El usuario puede solicitar el borrado de sus datos personales y, salvo circunstancias excepcionales como figuras públicas como políticos o *Chief Executive Officers*, la compañía está obligada a eliminarlos.

Se establece un amplio rango de posibles penalizaciones para aquellas compañías que no cumplan con el reglamento. Las autoridades pueden mandar avisos u órdenes para su cumplimiento. Si se decide a imponer una multa, esta será proporcional y basado en la circunstancia particular, hasta una cifra máxima de 20 millones de euros o el 4\% de la facturación anual de la empresa.

Su aplicación, además, es de obligado cumplimiento no solo por compañías europeas, sino por cualquier compañía que opere en el mercado de la UE. Sin embargo, las obligaciones no son las mismas para todas las compañías. Las pequeñas y medianas empresas (PYMES), que juegan un papel muy importante en el caso del mercado español, en tanto que no procesen datos sensibles -como podrían ser la orientación sexual o la inclinación política- no están obligadas a acudir a un Delegado de Protección de Datos (DPD) o llevar a cabo una evaluación del impacto de la protección de datos.

# El papel de la inteligencia artificial en el mercado actual

La inteligencia artificial tiene el potencial de transformar nuestro mundo para mejor: puede mejorar la salud, reducir el consumo de energía, hacer los  coches más seguros o permitir a los granjeros usar los recursos naturales de forma más eficiente. Puede usarse para predecir y el cambio climático, mejorar el control del riesgo financiero o detectar fraudes y amenazas cibernéticas.

Para poner en relieve la importancia de la inteligencia artificial, se listan algunos datos relevantes del estado actual de la inteligencia artificial en el mercado^[Fuente: https://cmo.adobe.com/articles/2018/9/15-mindblowing-stats-about-artificial-intelligence-dmexco.html]:

- La cantidad de información mundial se estima en 175 zettabytes para 2025.
- El 37\% de las compañías implementan técnicas de inteligencia artificial, suponiendo un crecimiento del 270\% en los últimos cuatro años.
- Para 2021, el 80\% de las tecnologías emergentes estarán basadas en la inteligencia artifical.
- La demanda de talento en el campo de la inteligencia artificial se ha doblado en los últimos dos años, existiendo dos puestos disponibels por cada profesional.
- El 63\% de las personas prefieren hablar con un *chat bot* que con un humano a la hora de comunicarse con una compañía.

La estrategia tecnológica que está siendo desarrollada y utilizada en torno a la inteligencia artificial a lo largo del planeta  tiene, no obstante, importantes cuestiones éticas y retos que resolver.

## La inteligencia artificial dentro del marco del GDPR

El artículo 5 establece los principios relativos al tratamiento de datos. Así, los datos serán:

a) tratados de manera lícita, leal y transparente en relación con el interesado (**principio de licitud, lealtad y transparencia**);

b) recogidos con fines determinados, explícitos y legítimos, y no serán tratados ulteriormente de manera incompatible
con dichos fines (**principio de limitación de la finalidad**);

c) adecuados, pertinentes y limitados a lo necesario en relación con los fines para los que son tratados (**principio de minimización de datos**);

d) exactos y, si fuera necesario, actualizados (**principio de exactitud**);

e) mantenidos de forma que se permita la identificación de los interesados durante no más tiempo del necesario para
los fines del tratamiento de los datos personales (**principio de limitación del plazo de conservación**);

f) tratados de tal manera que se garantice una seguridad adecuada de los datos personales (**principio de integridad y confidencialidad**);

A continuación se analizarán los retos más importantes a los que se enfrenta la inteligencia artificial con cada uno de estos principios.

### El sesgo en los algoritmos de inteligencia artificial

La intuición podría llevarnos a pensar que la inteligencia artificial analiza de manera más objetiva --y, por tanto, toma mejores decisiones-- que un ser humano. Sin embargo, tanto los algoritmos como los modelos predictivos son tan objetivos como aquel que los diseña e implementa. Si los datos de entrenamiento muestran una realidad sesgada, el resultado del model puede ser incorrecto o discriminatorio, lo que chocaría con el principio de licitud, lealtad y transparencia.

El modelo debe prevenir la discriminación con base en el origen étnico, la opinión política, religiosa, orientación sexual o el estado de salud haciendo uso de datos de entrenamiento correctos y relevantes.

### La inteligencia artificial y el principio de limitación de la finalidad

Se consideran los siguientes ejemplos:

1. El uso de datos personales para elaborar un modelo que permitirá diagnosticar un cáncer u otras enfermedades.
2. Basarnos en la actividad de un usuario de Facebook para dictaminar si se le concede o no una hipoteca.

Aunque moralmente un escenario nos parezca más justificable, ambos pueden enfrentarse al principio de limitación de finalidad. Si los datos del usuario se reciclan para ser utilizados con otro fin, este deberá dar su consentimiento nuevamente. Únicamente los fines de interés público, estadísticos o de investigación científica e histórica son compatibles con los fines iniciales.

Así, se distinguen modelos estáticos (u *offline*)  donde, una vez entrenados, dejan de aprender y únicamente procesan los datos de prueba, de modelos dinámicos que mejoran continuamente conforme reciben más datos; por ejemplo, cada nuevo paciente aportará datos que podrán ser utilizados para ayudar al siguiente. Se deberá, por tanto, revisar cuál es el límite lo que se considera investigación científica.

### La inteligencia artificial y el principio de minimización de datos

Los algoritmos de *machine learning* tienden a necesitar de grandes colecciones de datos para aprender --no solo los estadísticamente relevantes o los meramente aleatorios-- y, por tanto, dilucidar cuál es la información necesaria para un buen comportamiento del modelo es crucial para cumplir con el principio de minimización de datos. 

Además, se debe prevenir la identificación del usuario dentro del conjunto de datos, restringida por la cantidad y naturaleza de estos. Esto puede conseguirse mediante técnicas de cifrado o pseudoanonimización. La documentación de las diferentes evaluaciones que se realicen es crucial de cara a una posible inspección.

### Los algoritmos de caja negra y el principio de licitud, lealtad y transparencia

Los algoritmos de *deep learning*, que hacen uso de redes neuronales no lineales para clasificar los datos, involucran cantidades ingentes de datos, lo que hace aumentar la complejidad del procesado. Esto crea un efecto de *caja negra*, al hacer más difícil explicar las razones por las que el modelo ha tomado una decisión. Como anécodota que sirve de ejemplo, el software AlphaGo, desarrollado por la compañía DeepMind --ahora parte de Google--, ganó una partida de Go al campeón mundial de una forma tan inusual e incomprensible que los comentaristas asumieron que habría una disfunción en el programa.

Por otra parte, el artículo 22 expone que 

>> todo interesado tendrá derecho a no ser objeto de una decisión basada únicamente en el tratamiento automatizado,

lo que en esencia limitaría la utilización de algoritmos de inteligencia artificial para multitud de escenarios. Una vez más, existe una evidente ambigüedad en la interpretación de esta regla. Podría entenderse que el usuario tiene el derecho a demandar que un ser humano tome la decisión final en un proceso o a que la decisión sea automática siempre y cuando haya dado consentimiento explícito para ello.

# Técnicas para proteger los datos en inteligencia artificial

El informe de la *Norwegian Data Protection Authority* [@norwegian] incluye herramientas y métodos para proteger los datos correctamente dentro de la inteligencia artificial. Estos métodos no han sido evaluados en la práctica, sino por su posible potencial. Se distinguen tres categorías:

1. Métodos para reducir la necesidad de datos de entrenamiento.
- *Generative Adversarial Networks*, que tienen el potencial de mejorar la potencia de las redes neuronales y su habilidad para *pensar* como un humano.
- *Federated Learning*. Propone que los datos usados por los algoritmos se encuentren en el dispositivo del cliente en lugar del servidor.
- *Matrix capsules*, que son una nueva variante de redes neuronales, las cuales requieren menos datos de aprendizaje que lo que actualmente requieren los algoritmos de *deep learning*.
2. Métodos que preservan la protección de datos sin reducir el *datset* básico.
  - *Differential privacy*, que se basa en añadir ruido a los datos deliberadamente de manera que, al tratar de recuperar la información del usuario, no podría saberse cuáles son los datos originales y cuáles los contaminados.
  - Criptografía homomórfica, que permite procesar los datos mientras estos están siendo cifrados.
  - *Transfer Learning* permite entrenar *deep neuronal networks* con relativamente menos datos mediante la reutilización de modelos pre-entrenados en un nuevo problema.
3. Métodos diseñados para evitar problemas de caja negra.
  - *Explainable AI (XAI)* juega un papel importante en la búsqueda de transparencia, ya que el modelo está programado para describir su propósito de una manera fácilmente comprensible por un humano.
  - *Local Interpretable Model-Agnostic Explanations* propone explicar una decisión después de que esta haya sido tomada. A pesar de no ser transparente de inicio a fin, permite ser aplicada a cualquier modelo, lo cual puede ser de gran utilidad para comparar diferentes modelos.

# Conclusiones

La dimensión ética de la inteligencia artificial no es una característica *de lujo* ni un accesorio extra: necesita ser parte integral de su desarrollo. Luchar por una inteligencia artificial centrada en el ser humano y basada en la confianza es clave para preservar los valores de la sociedad.
