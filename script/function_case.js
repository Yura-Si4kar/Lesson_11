function interpolate(template, obj) {
    for (key in obj) {
        template = template.replaceAll(`{{${key}}}`, obj[key]);
    }

    return template;
}