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
        .select("*")
        .eq("status", "approved")
        .order("id", {
            ascending:
                false
        });

    if (error) {
        alert("ERROR = " + error.message);
        return;
    }



    const container =
        document.getElementById("properties-container");
    container.innerHTML = "";
    data.forEach((property) => {

        let photoCount = 1;

        let imagesHtml = "";

        if
            (property.image_urls.startsWith("[")) {

            const images = JSON.parse(property.image_urls);

            photoCount = images.length;

            images.forEach(url => {
                imagesHtml += `

<a href="${url}" target="_blank">

                    <img src="${url}"
                    width="300">

                    </a>
                    `;

            });

        } else {
            imagesHtml = `
            <a href="${property.image_urls}" target="_blank">
            <img src="${property.image_urls}"
            width="300">
            </a>
            `;
        }


        container.innerHTML += `
        <div class="property-card">
<div class="photo-gallery">
         ${imagesHtml}
          </div>


            <h2>${property.title}</h2>

            

            <p>${property.price}</p>

            

            <a href="${property.map_url}" target="_blank">
                View Location
            </a>

            <br><br>

            <a href="tel:${property.agent_mobile}">
                Call: ${property.agent_mobile}
            </a>
            <hr>

        </div>
        `;

    });

}

loadproperties();