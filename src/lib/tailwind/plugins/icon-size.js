const plugin = require('tailwindcss/plugin');

const iconSize = plugin(
  // @ts-ignore
  ({ addUtilities, theme, e, variants }) => {
    const values = theme('iconSize');

    addUtilities(
      // @ts-ignore
      Object.entries(values).map(([key, value]) => ({
        [`.${e(`icon-size-${key}`)}`]: {
          width: value,
          height: value,
          minWidth: value,
          minHeight: value,
          fontSize: value,
          lineHeight: value,
          [`svg`]: {
            width: value,
            height: value,
          },
        },
      })),
      variants('iconSize')
    );
  },
  {
    theme: {
      iconSize: (theme) => ({
        ...theme('spacing'),
      }),
    },
    variants: {
      iconSize: ['responsive'],
    },
  }
);

module.exports = iconSize;
