import { prefixPluginTranslations } from '@strapi/helper-plugin';
import pluginPkg from '../../package.json';
import pluginId from './pluginId';
// import Initializer from './components/Initializer';
import PluginIcon from './components/PluginIcon';
import getTrad from './utils/getTrad';

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.customFields.register({
      name: 'china-province',
      pluginId: 'china-province-picker',
      type: 'string',
      icon: PluginIcon,
      intlLabel: {
        id: getTrad('china-province-picker.label'),
        defaultMessage: '省份',
      },
      intlDescription: {
        id: getTrad('china-province-picker.description'),
        defaultMessage: '选择省份',
      },
      components: {
        Input: async () =>
          import('./components/ChinaProvincePicker'),
      },
      options: {
        advanced: [
          // {
          //   intlLabel: {
          //     id: getTrad('color-picker.options.advanced.regex'),
          //     defaultMessage: 'RegExp pattern',
          //   },
          //   name: 'regex',
          //   type: 'text',
          //   defaultValue: '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$',
          //   description: {
          //     id: getTrad('color-picker.options.advanced.regex.description'),
          //     defaultMessage: 'The text of the regular expression',
          //   },
          // },
          // {
          //   sectionTitle: {
          //     id: 'global.settings',
          //     defaultMessage: 'Settings',
          //   },
          //   items: [
          //     {
          //       name: 'required',
          //       type: 'checkbox',
          //       intlLabel: {
          //         id: getTrad('color-picker.options.advanced.requiredField'),
          //         defaultMessage: 'Required field',
          //       },
          //       description: {
          //         id: getTrad('color-picker.options.advanced.requiredField.description'),
          //         defaultMessage: "You won't be able to create an entry if this field is empty",
          //       },
          //     },
          //   ],
          // },
        ],
      },
    });


  },

  bootstrap(app) {},
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(
          /* webpackChunkName: "translation-[request]" */ `./translations/${locale}.json`
        )
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
