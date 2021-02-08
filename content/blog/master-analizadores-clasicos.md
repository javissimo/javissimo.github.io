---
title: Estado del arte de los planificadores clásicos
description: Se analizarán cuatro planificadores clásicos (secuenciales, deterministas) presentados en la IPC (International Planning Competition) celebrada en 018 (SYMPLE, MSP) y 2020 (Lilotane e HyperTensioN).
published: false
publishedAt: 2021-01-07T00:00:00.000Z
updatedAt: 2021-01-07T00:00:00.000Z
tags:
  - Inteligencia artificial
keywords:
  - Planners
authors:
  - Javier Peralta
---

## Introducción

La planificación clásica, llamada también planificación determinista, es el modelo básico para la Planificación Automática, en el cual se trabaja sobre un sistema que describe el mundo en forma de estados y los cambios en el mundo se realizan a través de transiciones de estado que se consiguen al aplicar las acciones que permite el entorno.  En este modelo [@ghallab] se asumen una serie de criterios:

- Espacio de estados finito: el sistema consta de un conjunto finito de estados.
- Determinismo: una acción representa la transición de un estado a otro único
estado.
- Mundo estático: no hay factores externos que cambien el mundo. Sólo la
aplicación de una nueva acción puede generar un estado diferente.
- Mundo completamente observable: el sistema tiene un pleno conocimiento
del estado actual.
- Metas restrictivas: el objetivo de los problemas es encontrar una secuencia
de acciones que lleven a un estado donde se cumplan todas las metas.
- Tiempo implícito: las acciones no tienen duración y se considera las transiciones de estado instantáneas.

En la _International Planning Competition_ se evalúan diferentes planificadores, tanto clásicos como probabilísticos o temporales, con el objetivo de compararlos con valores referenciales (_benchmarks_) para así poder distinguir las ventajas e inconvenientes de cada uno de ellos. En esta ocasión nos centraremos en la rama clásica y estudiaremos brevemente cómo funcionan los planificadores SYMPLE, MSP, presentados en la IPC de 2018, y Lilotane e HyperTensioN, presentados en la IPC de 2020. Además, se obtendrá y compilará el código fuente de cada uno de los planificadores.

Es importante añadir que para poder comparar los diferentes planificadores, estos deben utilizar un mismo lenguaje. En la actualidad, se utiliza el PDDL.

## Preparación del entorno de desarrollo

Antes de nada, instalaremos Singularity en Ubuntu gracias a Windows Subsystem for Linux. Los pasos a seguir son los siguientes:

1. Instalar varios paquetes esenciales para la posterior instalación de Go y la compilación de los planificadores.
``` bash 
sudo apt-get update && sudo apt-get install -y build-essential libssl-dev uuid-dev 
libgpgme11-dev squashfs-tools libseccomp-dev wget pkg-config git cryptsetup
flex bison libz-dev dh-autoreconf python2 ruby
```

2. Descargar e instalar Go.
``` bash
wget https://golang.org/dl/go1.15.6.linux-amd64.tar.gz && \
sudo tar -C /usr/local -xzf go1.15.6.linux-amd64.tar.gz && \
export PATH=$PATH:/usr/local/go/bin
```

3. (Opcional) Descargar y compilar Singularity para ejecutar en un contenedor
``` bash 
export VERSION=3.7.0 && \
    wget https://github.com/hpcng/singularity/releases/download/v${VERSION}/
    singularity-${VERSION}.tar.gz && \
    tar -xzf singularity-${VERSION}.tar.gz && \
    cd singularity
```


## SYMPLE

SYMPLE es un planificador clásico que realiza una búsqueda simbólica bidireccional -es decir, mezcla tanto la búsqueda hacia adelante como hacia atrás- utilizando una estructura de datos llamada _Edge-valued Multi-valued Decision Diagram_, que se puede utilizar para representar funciones aritméticas del mismo modo que los diagramas de decision binarios (_Binary Decision Diagrams_, BDDs) representan funciones lógicas y tienen la ventaja de poder almacenar tanto el coste como la accesibilidad  (_reachability cost_) de los estados en un único diagrama en lugar de en varios como en el caso de los BDDs.

SYMPLE hace uso de una variante de la búsqueda EVMDD-A*, la cual representa los estados candidatos a alcanzar el objetivo en una lista abierta que codifica el coste de accesibilidad de cada estado. Al ser una variante de búsqueda bidireccional ciega, en cada iteración se debe decidir si realizar un paso hacia adelante (_forward_) o hacia atrás (_backward_). Dicha decisión se toma comparando los tiempos de ejecución de los últimos pasos _forward_, _backward_, descartando el mayor de ambos. Cuando un estado se encuentra tanto en la lista de costes codificados durante la búsqueda hacia adelante como en la de los costes codificados durante la búsqueda hacia atrás habremos encontrado el camino deseado. Para hallar el camino óptimo se debe terminar la búsqueda y cerciorarse de haber obtenido el camino de menor coste. Finalmente los planes obtenidos por ambas direcciones se reconstruyen y combinan para obtener el resultado.

La compilación de SYMPLE es realmente sencilla. Basta con seguir las instrucciones detalladas en `https://bitbucket.org/ipc2018-classical/team3/src/ipc-2018-seq-opt/`.


## Meta-Search Planner (MSP)

Dado un problema de planificación, MSP distingue dos fases: la búsqueda en el espacio de los planificadores, las representaciones y heurísticas y la ejecución del planificador hallado con los parámetros obtenidos previamente.
Utiliza la definición clásica de planificación de tarea, $\prod = \left\{ F,A,I,G \right\}$, donde $F$ es el conjunto de proposiciones, $A$ el conjunto de acciones, $I$ el estado inicial y $G \subseteq F$ los objetivos.

Durante la primera fase se tienen en cuenta los cambios de representación del problema, tanto externos --los que generan un nuevo PDDL-- como internos --como la logica proposicional o el SAS$^+$-- así como un dominio, $D$ y un problema $P$, que forman parte del lenguaje PDDL.

En ella, se utiliza una búsqueda voraz con una técnica similar al _enforced-hill-climbing_, que hace uso de la búsqueda en anchura (_breadth-first search_). Comienza evaluando el estado y el plan con el planificador SYMBA* y el problema y dominio iniciales y obtiene una lista de sucesores --estados de la meta-búsqueda-- y vuelve a evaluar con cada uno de ellos. Tan pronto como la evaluación de un sucesor mejore la evaluación antecesora, comienza a evaluar a partir del nuevo estado. El algoritmo finaliza en los siguientes supuestos:

- El tiempo de búsqueda ha finalizado.
- Se encuentra un plan adecuado durante el tiempo de evaluación.
- No se encuentra ningún sucesor mejor que el padre en cuaquiera de los niveles.

Un aspecto clave del MSP es la elección del tiempo que se asigna para la meta-búsqueda del planificador y el tiempo de resolución del problema en sí. Para la IPC, el tiempo de evaluación se estableció en $$75$$ segundos, mientras que el de meta-búsqueda y resolución se dividieron en dos el tiempo restante.

El uso de este planificador no está bien documentado, aunque inspeccionando el fichero `plan.sh` se observa que recibe tres parámetros en el siguiente orden: el dominio, el problema y el fichero con el plan a evaluar.

## Lifted Logic for Task Networks (Lilotane)

Lilotane codifica un problema de planificación basado en una red de tareas jerárquicas totalmente ordenadas (_Totally Ordered Hierarchical Task Network_, TOHTN) en una lógica proposicional incremental. Una red jerárquica de tareas (HTN) no es más que un algoritmo de planificación automática que crea un plan por descomposición de tareas en subtareas hasta lograr primitivas que pueden ser ejecutadas directamente.

El procedimiento de este planificador es el siguiente:

1. Se analiza y procesa mediante una instanciación en diferido (_lazy instantiation_) de los operadores la descripción formal del problema de planificación, asumiendo ciertas precondiciones y restricciones en la definición de los operadores y los métodos a utilizar. Esta reducción del conjunto de operadores y métodos hace que el proceso se acelere de forma significativa.

2. Se agregan las oraciones de lógica proposicional que describen la capa jerárquica más elevada del problema que todavía no ha sido modificada; esto se realiza _al vuelo_, es decir, se añaden los métodos conforme se necesitan. Se aplica un algoritmo de resolución del problema de satisfacibilidad booleana (SAT) en la fórmula resultante.

3. Si el algoritmo encuentra un modelo que satisface la asignación de variables booleanas, se de vuelve el plan. Si no, se vuelve a ejecutar el paso 2.

Para utilizar el planificador, una vez descargado el código fuente, basta con compilar mediante el comando `make` y ejecutar el programa de la forma

``` bash
./lilotane path/to/domain.hddl path/to/problem.hddl [options]
```


## HyperTensioN

La lista de tareas (el _input_ de la planificación) se descompone hasta que no queda ninguna,  devolviendo un plan vacío. Al final de la cola recursiva están los operadores y los métodos. El operador prueba si la tarea actual (la primera en la lista) se puede aplicar al estado actual. Si se aplica con éxito, el proceso de planificación continúa descomponiendo e insertando la tarea actual al comienzo del plan.

Si es un método, se decompone en uno de los varios casos con una unificación válida para las variables libres. Cada caso unificado es una lista de tareas y/o subtareas que también pueden requerir descomposición. Los métodos se encargan de la parte más costosa computacionalmente, mientras que los operadores primitivos simplemente ejecutan las acciones cuando les corresponde. Si no ocurre ninguna descomposición, se devuelve un error.

El pseudocódigo del algoritmo es el siguiente:

``` ruby
Algorithm planning(list tasks)
  return empty plan if tasks = empty
  current_task <- shift element from tasks
  if current_task is an Operator
    if applicable(current_task)
      apply(current_task)
      plan <- planning(tasks)
      if plan
        plan <- current_task + plan
        return plan
      end
    end
  else if current_task is a Method
    for methods in decomposition(current_task)
      for subtasks in unification(methods)
        plan <- planning(subtasks + tasks)
        return plan if plan
      end
    end
  end
  return Failure
end
```

## Conclusiones

La senda determinista, aquí expuesta, en detrimento del realismo que otros enfoques más modernos como el probabilístico o el temporal ofrecen, proporciona una herramienta muy útil en investigación por su claridad y la sencillez con la que se modelan los problemas. Parafraseando a Stravinsky, _cuantas más restricciones se imponen, más se libera uno de las cadenas que atan al espíritu_.

Finalmente, la IPC, organizada por la ICAPS (_International Conference on Automated Planning and Scheduling_), ofrece la oportunidad de fomentar la colaboración entre las instituciones participantes y así tejer una red de científicos apasionados por la planificación automática.
