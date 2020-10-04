# SubredditFeed

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Planning

### Ideal End Result
In the Wireframe below the developer has illustrated how the application should look if all goals are achieved for the best possible result. This would include the following functionality:
- Search bar for users to type in the subreddit they wish to receive posts from
- Posts being displayed on the page, two a row on desktop view
- Toggle to be able to select the number of posts the user wants fed into the application. The number of posts per page would be limited to a maximum of 10 posts
- Pagination via Next and Previous buttons presented depending on amount of posts the user wishes to display, this being in the case of having 25 posts fed into the application
- Clicking on a post will provide a view of this post solely, with the post text displayed
- Comments of the post with will be displayed in a thread-like manner below the post
![Ideal Result](/subreddit-feed/src/assets/ideal-result.png "Ideal Result")


### Minimal Viable Product
This second wireframe illustrates the Minimal Viable Product. This would only display one, default subreddit feed, with a default 25 posts fed into the interface. Pagination feature along with singe post view would still be available, however, comments would not be displayed for single post view.
![Minimal Viable Product](/subreddit-feed/src/assets/mvp.png "Minimal Viable Product")

### High Level Architecture
Below is the high level picture of the application itself, illustrating the different parts/components that would be required in building this application.
![High Level Architecture](/subreddit-feed/src/assets/high-level-architecture.png "High Level Architecture")