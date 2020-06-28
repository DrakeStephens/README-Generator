
module.exports = templateData => {
    console.log(templateData);
    const { projects, about, ...header } = templateData;
    return `
    ##${header.projectName}

    
    `;
  };
