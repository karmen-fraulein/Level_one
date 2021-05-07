function renderHTML(data) {
  let html = "";
  if (data.results) {
    data.results.map((results) => {
      html += `
                    <div class="list-item">
                        <div class="link-wrapper">
                            <video class="link" controls>
                                <source src="${results.previewUrl}" type="video/mp4">
                            </video>
                            <h3><b>${results.artistName}</b></h3>
                            <p>${results.trackCensoredName}</p>
                        </div>
                    </div>
                    `;
    });
  }

  link.innerHTML = html;
}
