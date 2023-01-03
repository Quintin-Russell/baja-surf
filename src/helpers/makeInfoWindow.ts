const makeContentHtml = (title: string, description: Marker["description"]) => {
  return `
    <section id="content-container">
        <h1 class="infoWindowTitle">${title}</h1>
        <div class="row">
            <span> <b>Wave Type:</b> ${description.waveType}</span>
        </div>
        <div class="row">
            <span> <b>Quality:</b> ${description.waveQuality}</span>
        </div>
        <div class="row">
            <h4>Description:</h4> 
            <p>${description.text}</p>
        </div>
    </section>
    `
}

const makeInfoWindow = (title: string, description: Marker["description"]) => {
  return new google.maps.InfoWindow({
    content: makeContentHtml(title, description),
    ariaLabel: title,
  })
}

export default makeInfoWindow
