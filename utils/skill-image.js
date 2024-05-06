import * as adobeXd from '/public/svg/skills/adobe-xd.svg';
import afterEffects from '/public/svg/skills/after-effects.svg';
import angular from '/public/svg/skills/angular.svg';
import bootstrap from '/public/svg/skills/bootstrap.svg';
import c from '/public/svg/skills/c.svg';
import cplusplus from '/public/svg/skills/cplusplus.svg';
import css from '/public/svg/skills/css.svg';
import docker from '/public/svg/skills/docker.svg';
import git from '/public/svg/skills/git.svg';
import html from '/public/svg/skills/html.svg';
import illustrator from '/public/svg/skills/illustrator.svg';
import javascript from '/public/svg/skills/javascript.svg';
import materialui from '/public/svg/skills/materialui.svg';
import memsql from '/public/svg/skills/memsql.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import nuxtJS from '/public/svg/skills/nuxtJS.svg';
import photoshop from '/public/svg/skills/photoshop.svg';
import postgresql from '/public/svg/skills/postgresql.svg';
import react from '/public/svg/skills/react.svg';
import svelte from '/public/svg/skills/svelte.svg';
import tailwind from '/public/svg/skills/tailwind.svg';
import typescript from '/public/svg/skills/typescript.svg';
import vitejs from '/public/svg/skills/vitejs.svg';
import vue from '/public/svg/skills/vue.svg';
import vuetifyjs from '/public/svg/skills/vuetifyjs.svg';
import wordpress from '/public/svg/skills/wordpress.svg';
import node from '/public/svg/skills/nodejs.svg'
import express from '/public/svg/skills/express.svg'
import jquery from '/public/svg/skills/Jquery.svg'
import ajax from '/public/svg/skills/ajax.svg'




export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'node.js':
      return node;
      case 'html':
        return html;
        case 'photoshop':
          return photoshop;
          case 'docker':
            return docker;
            case 'illustrator':
              return illustrator;
              case 'adobe xd':
                return adobeXd;
                case 'after effects':
                  return afterEffects;
                  case 'css':
                    return css;
                    case 'angular':
                      return angular;
                      case 'expressjs':
                        return express;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'nuxt js':
      return nuxtJS;
      case 'react':
        return react;
    case 'svelte':
      return svelte;
      case 'typescript':
        return typescript;
        case 'vue':
          return vue;
          case 'bootstrap':
            return bootstrap;
    case 'memsql':
      return memsql;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'vuetifyjs':
      return vuetifyjs;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;

    case 'git':
      return git;
    case 'materialui':
      return materialui;
    case 'wordpress':
      return wordpress;
    case 'jquery':
      return jquery;  
    case 'ajax':
      return ajax;

    default:
      break;
  }
}
