# new-site
Hexo/Gulp generator for the reapp.github.io repository, which feeds content to the [reapp.io](http://reapp.io) site.

## Prerequisites

1. Install [Hexo](https://hexo.io/docs/) command line interface.
```
npm install -g hexo-cli
```

## To update the reapp.io site:

1. Clone the following github reapp repositories in the same parent folder where you cloned this repository (https://github.com/reapp/new-site.git):

  https://github.com/reapp/reapp.git

  https://github.com/reapp/reapp-routes.git

  https://github.com/reapp/reapp-component.git

  https://github.com/reapp/reapp-platform.git

  https://github.com/reapp/reapp-request.git

  https://github.com/reapp/reapp-reducer.git

  https://github.com/reapp/reapp-object-assign.git

  https://github.com/reapp/reapp-pack.git

  https://github.com/reapp/reapp-server.git

  https://github.com/reapp/reapp-ui.git

  https://github.com/reapp/reapp.github.io.git

1. Update the desired documentation content in the individual README.md files of the above reapp and reapp-\* repositories. See table below for more details.

1. Generate site markdown from individual repositories' markdown by running this repository's default gulp task.
  ```
  gulp
  ```

1. Generate Hexo content from generated markdown and other files in this repository.
  ```
  hexo generate
  ```

1. Run local Hexo server and test changes locally (http://localhost:4000).
  ```
  hexo server
  ```

1. Deploy changes to the reapp.github.io repository which results in [reapp.io](http://reapp.io) being updated.
  ```
  hexo deploy
  ```

*Note that this results in an immediate commit/push to the reapp.github.io repository and thus the production reapp.io site.*

| To show documentation under this site navigation section... | ...edit these documentation files... | ...which generates these files |
| :---: | :---: | :---: |
| Get Started | [reapp/README.md](../reapp/README.md) | [new-site/source/start.md](./source/start.md) |
| Documentation > User Interface | [reapp-ui/README.md](../reapp-ui/README.md) | [new-site/source/ui.md](./source/ui.md) |
| Documentation > Packages | [reapp-routes/README.md](../reapp-routes/README.md)<br> [reapp-component/README.md](../reapp-component/README.md)<br> [reapp-platform/README.md](../reapp-platform/README.md)<br> [reapp-request/README.md](../reapp-request/README.md)<br> [reapp-reducer/README.md](../reapp-reducer/README.md)<br> [reapp-object-assign/README.md](../reapp-object-assign/README.md)<br> [reapp-pack/README.md](../reapp-pack/README.md)<br> [reapp-server/README.md](../reapp-server/README.md) | [new-site/source/packages.md](./source/packages.md) |
| Documentation > Components | [reapp-ui/docs/components](../reapp-ui/docs/components)/\*.md | [new-site/source/components.md](./source/components.md) |
| Documentation > Views | [reapp-ui/docs/views](../reapp-ui/docs/views)/\*.md | [new-site/source/views.md](./source/views.md) |
| Documentation > Animations | [reapp-ui/docs/core/animations.md](../reapp-ui/docs/core/animations.md) | [new-site/source/docs-animations.md](./source/docs-animations.md) |
| Documentation > Themes | [reapp-ui/docs/core/themes.md](../reapp-ui/docs/core/themes.md) | [new-site/source/docs-themes.md](./source/docs-themes.md) |

The following files can be safely edited manually in this repository for additional site layout and content changes. They will be used by Hexo in generating the reapp.io site content.

| Site Content | File |
| --- | --- |
| Landing page | [themes/landscape/layout/index.ejs](./themes/landscape/layout/index.ejs) |
| Navigation | [themes/landscape/layout/_partial/docs_nav.ejs](./themes/landscape/layout/_partial/docs_nav.ejs) |
| Footer | [themes/landscape/layout/_partial/footer.ejs](./themes/landscape/layout/_partial/footer.ejs) |
| Header (not visible on landing page) | [themes/landscape/layout/_partial/header.ejs](./themes/landscape/layout/_partial/header.ejs) |
