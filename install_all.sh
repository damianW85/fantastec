#!/bin/bash

# Morgan VILLEDIEU Basic project runner ==================
# Functions ==============================================

# return 1 if global command line program installed, else 0
# example
# echo "node: $(program_is_installed node)"
function program_is_installed {
  # set to 1 initially
  local return_=1
  # set to 0 if not found
  type $1 >/dev/null 2>&1 || { local return_=0; }
  # return value
  echo "$return_"
}

# return 1 if local npm package is installed at ./node_modules, else 0
# example
# echo "gruntacular : $(npm_package_is_installed gruntacular)"
function npm_package_is_installed {
  # set to 1 initially
  local return_=1
  # set to 0 if not found
  ls node_modules | grep $1 >/dev/null 2>&1 || { local return_=0; }
  # return value
  echo "$return_"
}

# display a message in red with a cross by it
# example
# echo echo_fail "No"
function echo_fail {
  # echo first argument in red
  printf "\e[31m✘ ${1}"
  # reset colours back to normal
  echo "\033[0m"
}

# display a message in green with a tick by it
# example
# echo echo_fail "Yes"
function echo_pass {
  # echo first argument in green
  printf "\e[32m✔ ${1}"
  # reset colours back to normal
  echo "\033[0m"
}

# echo pass or fail
# example
# echo echo_if 1 "Passed"
# echo echo_if 0 "Failed"
function echo_if {
  if [ $1 == 1 ]; then
    echo_pass $2
  else
    echo_fail $2
  fi
}

# ============================================== Functions

echo "\n**************************************************"
echo "*                                                *"
echo "*             Morgan Front-End Starter           *"
echo "*                                                *"
echo "*                   Using Grunt                  *"
echo "*                                                *"
echo "*                  ༼ つ ◕_◕ ༽つ                  *"
echo "*                                                *"
echo "**************************************************"
echo ""
echo 'Starting...'

# command line programs
echo "\n========= Command Line Programs ==========\n"

if (( $(program_is_installed brew) == 1 ))
then
	echo "Homebrew      $(echo_if $(program_is_installed brew))"
else
	echo "Homebrew          $(echo_if $(program_is_installed brew))"
 	sudo ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
 	sudo brew update
 	sudo brew doctor
 	sudo export PATH="/usr/local/bin:$PATH"
  sudo brew -v
fi

if (( $(program_is_installed node) == 1 ))
then
	echo "node          $(echo_if $(program_is_installed node))"
  node -v

else
	echo "node          $(echo_if $(program_is_installed node))"
 	sudo brew install node
fi

if (( $(program_is_installed grunt) == 1 ))
then
	echo "grunt         $(echo_if $(program_is_installed grunt))\n"
  grunt -version
else
	echo "grunt         $(echo_if $(program_is_installed grunt))\n"
 	sudo npm install -g grunt-cli
fi

# update dependencies and version brew and node if necessary
brew update && brew upgrade node


# local npm packages
echo "\n================ Local NPM ===============\n"

echo "Checking dependencies ..."
if ((
  $(npm_package_is_installed grunt-browserify) +
  $(npm_package_is_installed babelify) +
	$(npm_package_is_installed grunt-shell) +
	$(npm_package_is_installed grunt-preload-manifest) +
	$(npm_package_is_installed grunt-browser-sync) +
	$(npm_package_is_installed grunt-contrib-concat) +
	$(npm_package_is_installed grunt-contrib-imagemin) +
	$(npm_package_is_installed grunt-autoprefixer) +
	$(npm_package_is_installed grunt-contrib-jshint) +
	$(npm_package_is_installed grunt-contrib-sass) +
	$(npm_package_is_installed grunt-contrib-uglify) +
	$(npm_package_is_installed grunt-contrib-watch) +
	$(npm_package_is_installed grunt-delete-sync) +
	$(npm_package_is_installed grunt-newer) +
	$(npm_package_is_installed grunt-contrib-watch)  != 0 ))
then
	echo "You don't need to install any packages\n"
else
	echo "Installing dependencies ...\n"
	sudo npm install
fi

# local npm packages dependencies checker.

echo "grunt-browserify   				$(echo_if $(npm_package_is_installed grunt-browserify))"
echo "grunt-browserify   				$(echo_if $(npm_package_is_installed babelify))"
echo "grunt-shell   				$(echo_if $(npm_package_is_installed grunt-shell))"
echo "grunt-preload-manifest 			$(echo_if $(npm_package_is_installed grunt-preload-manifest))"
echo "grunt-browser-sync   			$(echo_if $(npm_package_is_installed grunt-browser-sync))"
echo "grunt-contrib-concat			$(echo_if $(npm_package_is_installed grunt-contrib-concat))"
echo "grunt-contrib-imagemin 			$(echo_if $(npm_package_is_installed grunt-contrib-imagemin))"
echo "grunt-autoprefixer 			$(echo_if $(npm_package_is_installed grunt-autoprefixer))"
echo "grunt-contrib-jshint 			$(echo_if $(npm_package_is_installed grunt-contrib-jshint))"
echo "grunt-contrib-sass 			$(echo_if $(npm_package_is_installed grunt-contrib-sass))"
echo "grunt-contrib-uglify 			$(echo_if $(npm_package_is_installed grunt-contrib-uglify))"
echo "grunt-contrib-watch 			$(echo_if $(npm_package_is_installed grunt-contrib-watch))"
echo "grunt-delete-sync 			$(echo_if $(npm_package_is_installed grunt-delete-sync))"
echo "grunt-newer 				$(echo_if $(npm_package_is_installed grunt-newer))"
echo "grunt-contrib-watch 			$(echo_if $(npm_package_is_installed grunt-contrib-watch))"
echo "jshint-stylish 				$(echo_if $(npm_package_is_installed jshint-stylish))"

# Changing authorization node_modules folder.
sudo chmod -R u+r node_modules

# Running grunt watcher project
echo "\n================ Running Grunt Project ===============\n"

echo "**************************************************"
echo "*                                                *"
echo "*                     INFOS                      *"
echo "*                                                *"
echo "*      1 - Modify only files in the src folder   *"
echo "*       2 - run > grunt (For default watch)      *"
echo "*       3 - run > grunt build (Production)       *"
echo "*                                                *"
echo "**************************************************"

echo "Do you want to start grunt now ?\n"
read -p "Continue (y/n)?" choice
case "$choice" in
  y|Y ) sudo grunt;;
  n|N ) echo "no";;
  * ) echo "invalid";;
esac
