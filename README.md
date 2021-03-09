# Mon Portfolio

## Concernant ce portfolio

Ce portfolio a été réalisé à l'aide de React.js, il répertorie mes projets, mon parcours scolaire et des informations me concernant.

## Pour le lancer

Pour lancer ce portfolio, ayant utilisé docker pour faciliter le deploiement de cette application. Pour lancer le projet il suffit d'avoir installé docker, de pull le projet et taper la commande suivante :

```bash
    docker build [--name [-t] nomimage[:tag_version]] .
```

Cette commande va créer l'image, une fois l'image crée, il suffit de lancer un conteneur à partir de cette image avec la commande ci-dessous :

```bash
    docker run [-p | --publish physical_machine_port:3000] [-d | --detach ] [--name nomconteneur] nomimage[:tag_version]
```
