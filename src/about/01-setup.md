---
layout: page
title: Setup of a development environment
permalink: /about/01-setup

image:
  path: assets/images/2025/tournament-event-01-2024.png
  alt: A siege of Cybran amphibious units against a Seraphim base.
---

# Accounts and tooling

To contribute you need various accounts and tooling. The accounts are mandatory but the tooling is entirely a suggestion. With the suggested tooling it will work and the community can provide support when necessary.

You're free to make different choices but you will be on your own.

## Accounts

You'll need to create an account for the following service:

- [GitHub](https://github.com/): GitHub is an online workspace where people collaborate on projects, similar to Google Drive but designed for teamwork. It keeps track of changes so multiple people can work on the same files without issues.

## Required Tools

You'll need the following tools to interact with GitHub and run the website on your computer:

- [Git](https://git-scm.com/): A tool that keeps track of changes to files, ensuring you can save, update, or undo changes if needed.
- [GitHub Desktop](https://desktop.github.com/download/): A simple app that lets you work with GitHub without needing to use complex commands.

To run the website on your computer, you'll also need:

- [Docker Desktop)](https://www.docker.com/products/docker-desktop/): A tool that automatically sets up everything needed to build and view the website on your device.

_Additional step for Windows users:_

- [Windows Subsystem Linux](https://learn.microsoft.com/en-us/windows/wsl/install): A feature that helps Windows computers run the necessary tools for the website.

## Recommended Tools

These tools are optional but can make editing the website easier:

- [Visual Studio Code](https://code.visualstudio.com/): A user-friendly text editor that makes it easier to work with website files.

## Installing on Ubuntu

Installing software on Linux is sometimes trivial and sometimes... heartbreaking. If you're a Linux user and you're stuck then here's some help. We assume that you use the Ubuntu distribution.

If you're unfamiliar with Git on the terminal then you can use a [fork of GitHub Desktop](https://github.com/shiftkey/desktop) that has patches for various Linux distributions. You can download the `.deb` installation package of the [latest release](https://github.com/shiftkey/desktop/release/latest). Right-click on the downloaded file and click on `Open it with App Center`. Proceed with the installation as usual. The same applies to [Visual Studio Code](https://code.visualstudio.com/download).

For Docker there is [extensive documentation](https://docs.docker.com/desktop/setup/install/linux/) on how to install it on Ubuntu. I personally took the approach through the `apt` repository. It contains some terminal work, but it's well documented.

## Sanity check

Make sure to restart your device. To confirm all the tooling is available you can open a command prompt. Then type the following:

```bash
  git -v      # check for Git
  docker -v   # check for Docker

  # in case you want to use Visual Studio Code
  code -v     # Check for Visual Studio code

  # in case you are on Windows
  wsl -v      # Check for Windows Subsystem Linux
```

If all the commands return one or more version number(s) then you are good to proceed.

# Run the website

The source code of the website is managed by a Git repository on GitHub. A Git repository contains files, just like a folder does. In this section we'll first create our own copy of the repository on GitHub. This process is called [forking a repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks). It provides you with a playground that you experiment in safely. We then proceed to download the fork that you just created. This process is called [cloning a repository](). Once you've cloned the repository the source files of this project is on your device, ready for you to run and edit. We'll use docker to build the source code into something that a browser understand and then use a web server to make the compiled website available through a browser. This process is called [compiling]() and [serving]() the website.

For this section we assume that you have a GitHub account. You can not proceed without it.

## Forking

GitHub provides an [excellent guide](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository) on how to create a fork. Proceed with that, but change the following steps:

- In step 1, instead of navigating to the [Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository, navigate to [our repository](https://github.com/FAForever/website-news) and fork that instead.

## Cloning

GitHub provides an [excellent guide](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#cloning-your-forked-repository) on how to clone your fork. However, if you're not familiar or comfortable with the command line then the remainder of this section is for you.

Launch GitHub Desktop. Make sure that you are logged in with the GitHub account that you just made a fork with.

Navigate to your fork on GitHub in the browser. Click on the green `<> code` button. In the popup, make sure the `HTTPS` tab is open. Copy the URL to the clipboard.

{% include components/thumbnail.html path="/assets/images/about/github-clone-01.png" alt="test" %}

In GitHub Desktop, navigate in the top bar menu navigate to `File -> Clone repository...`. In the popup, make sure the `URL` tab is open. Paste the URL you just copied into the `URL or username/repository` field. Then choose a location where you want to download and store the repository on your device. Note that the repository may grow to several gigabytes as time passes. Click on `Clone`. Once the cloning procedure is complete another popup asks you how you intend to use the project. Select `To contribute to the parent project` and click on `Continue`.

As a sanity check, navigate with File Explorer to where you cloned the repository. The content of the folder should be identical to the content that you saw on GitHub.

## Serve the website via Docker

Launch Docker Desktop. Then navigate with File Explorer to where you cloned the repository. Right-click in the File Explorer and open a Command Line at the location of the repository. Then proceed to type:

```bash
docker compose up
```

This triggers various actions within Docker that are defined in the `compose.yaml` file. It retrieves the image from the GitHub Container Repository (GHCR). Once the image is on your system it launches a container using that image. The container then proceeds to start Jekyll and serve the website. The first time you run this it may take a while. As the process completes, you may notice that new folders are created in the `src` folder of where your repository is. These include:

- `_site`: this contains the compiled HTML, CSS and Javascript of your website.
- `cache`: this contains all the post-processed images to make them more [responsive](https://developer.mozilla.org/en-US/docs/Web/HTML/Responsive_images), which reduces the loading time of websites.

Once the process it is finished it should state something like:

```
serve-1  |  Auto-regeneration: enabled for '/src'
serve-1  | LiveReload address: http://0.0.0.0:35729
serve-1  |     Server address: http://0.0.0.0:4000/
serve-1  |   Server running... press ctrl-c to stop.
serve-1  |         LiveReload: Browser connected
```

That server address is valid inside the container, but not on your device. You can navigate to the website with a browser by typing `127.0.0.1:4000` as a URL. If you see the news website then your setup is complete. 

## Toying around

The whole purpose of this is to create your own playground. Let's toy around in it!

- 1) All news items are in the `_posts` folder. Open up such a file and change some of the content.
- 2) All images are in `assets/images`. Add new image and change the thumbnail URL of a post.

## FAQ

- _I changed something of a news item, but I do not see the changes reflected in the overview page_

That's correct, it is a bug with Jekyll's change detection in my opinion. When you change a post you see something similar to this in the terminal:

```
serve-1  |       Regenerating: 1 file(s) changed at 2025-02-25 11:27:08
serve-1  |                     _posts/2025/2025-01-05-fall-tourney-02.md
serve-1  |           Skipping: _posts/2025/2025-03-01-seton-tourney.md has a future date
serve-1  |           Skipping: _posts/2025/2025-03-08-winter-tourney.md has a future date
serve-1  |        Jekyll Feed: Generating feed for posts
serve-1  |                     ...done in 3.260324181 seconds.
```

Note how it is only regenerating 1 file. It is only regenerating the page of the file itself. It is not regenerating pages that use the post indirectly. To view your changes in the overview page, open up `index.html` and re-save it (without changes). It will then show the changes you made to the news item. 
