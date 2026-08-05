alert("START");

const SUPABASE_URL = "https://sqavlyzqaxutbwqdytic.supabase.co";
const SUPABASE_KEY = "sb_publishable_j3AU3mvrWfDYqvxCZ46Z_A_lUEC2PkC";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);



async function loadproperties() {

    const { data, error } = await supabaseClient
        .from("properties")
        .select("*");

    if (error) {
        alert("ERROR = " + error.message);
        return;
    }



    const container =
        document.getElementById("properties-container");
    container.innerHTML = "";
    data.forEach((property) => {

        let imagesHtml = "";

        if
            (property.image_urls.startsWith("[")) {

            const images = JSON.parse(property.image_urls);

            images.forEach(url => {
                imagesHtml += `
                    <img src="${url}"
                    width="300">
                    `;
            });

        } else {
            imagesHtml = `
            <img src="$
            {property.image_urls}"
            width="300">
            `;
        }


        container.innerHTML += `
        <div>

         ${imagesHtml}
          

            <h2>${property.title}</h2>

            <p>${property.address}</p>

            <p>${property.price}</p>

            <p>${property.description}</p>

            <a href="${property.map_url}" target="_blank">
                View Location
            </a>

            <br><br>
            <hr>

        </div>
        `;

    });

}

loadproperties();