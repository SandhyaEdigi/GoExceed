import StyleDictionary from "style-dictionary-utils";
const formatShadow = ({
    x = '0',
    y = '0',
    blur = '0',
    spread = '0',
    color,
    inset = false
  }) => `${x}px ${y}px ${blur} ${spread} ${color} ${inset ? 'inset' : ''}`.trim();
  
  StyleDictionary.registerTransform({
    name: 'custom/dropShadow',
    type: 'value',
    matcher: function(token) {
      return token.type === 'boxShadow'; // Assuming you categorize drop shadow tokens
    },
    transformer: ({ value }) => {
        if (Array.isArray(value)) {
          return value.map(formatShadow).join(", ");
        }
    
        if (typeof value === "object") {
          return formatShadow(value);
        }
    
        return value;
      }
  });
  StyleDictionary.registerTransformGroup({
    name: 'custom/css',
    transforms: ['custom/dropShadow', 'attribute/cti', 'size/px', 'font/css', "attribute/cti",
    "name/cti/kebab",
    "time/seconds",
    "content/icon",]
  });
  StyleDictionary.registerFilter({
    name: 'isDarkParent',
    matcher: function(token) {
      return token.parent === 'Tokans/Dark';
    }
  });
  StyleDictionary.registerFilter({
    name: 'isLightParent',
    matcher: function(token) {
      return token.parent === 'Tokans/Light';
    }
  });
const darkConfig ={
    "source": ["tokens/Tokans/Dark.json", "tokens/Premitive/Mode 1.json"],
    "platforms": {
        "scss": {
            "transformGroup": "custom/css",
            "buildPath": "src/styles/",
            "prefix":"dark",
            "files": [
              {
                "destination": "dark.css",
                "format": "css/variables",
                "filter": "isDarkParent"
              }
            ]
        }
    }
}
const globalConfig ={
    "source": ["tokens/global.json", "tokens/Premitive/Mode 1.json"],
    "platforms": {
        "scss": {
            "transformGroup": "custom/css",
            "buildPath": "src/styles/",
            "files": [
              {
                "destination": "global.css",
                "format": "css/variables"
              }
            ]
        }
    }
}
const lightConfig={
    "source": ["tokens/Tokans/Light.json", "tokens/Premitive/Mode 1.json"],
    "platforms": {
        "scss": {
            "transformGroup": "custom/css",
            "buildPath": "src/styles/",
            "files": [
              {
                "destination": "light.css",
                "format": "css/variables",
                "filter": "isLightParent"
              }
            ]
        }
    }
}

  const sdGlobal = StyleDictionary.extend(globalConfig);
  const sdDark = StyleDictionary.extend(darkConfig);
  const sdLight = StyleDictionary.extend(lightConfig);
  sdDark.buildAllPlatforms();
  sdLight.buildAllPlatforms();
  sdGlobal.buildAllPlatforms();
