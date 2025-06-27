<template>
    <HeaderBar />
    <main>
        <section class="mb-140">
            <h3 class="fw-bold mt-90 mb-5">Projects</h3>
            <p class="fs-6 w-800 w-max-100 mx-auto">
                Over the years, I’ve worked on a variety of projects that range from small, functional apps to more complex applications. 
                These smaller projects were stepping stones in learning different technologies and approaches, each contributing to the 
                skills I apply today. When I was in middle school, I made two complete games in Unity with C#. There were also a few 
                unfinished games where I explored new game mechanics and NPC AI, refining my skills in C#. During high school, I developed 
                numerous small web and desktop applications. These include school apps, blog pages, and calculators, as well as more 
                interesting projects like an anti-bullying blog site built in plain PHP for a competition. Other apps were created in C# 
                .NET and PHP, such as dummy commercial and rental applications. While some were simple, others were more feature-rich, but 
                none were particularly professional or large-scale, mostly small tools and prototypes.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                However, the 2 that stand out are <span class="color-purple">NovaKeys</span> - a fully-featured digital marketplace, and <span class="color-purple">sklopi</span> - a feature-rich PC builder that makes PC building easier and cheaper.
            </p>
        </section>

        <section class="mb-140">
            <h3 class="fw-bold mb-5">NovaKeys - A Full-Fledged Digital Marketplace</h3>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Seller Features:</span> Sellers can create products with detailed information, and then create listings for those products. This separation makes the process easier to manage and offers a more streamlined buying experience for customers.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Referral System:</span> Influencers can earn a 5% commission, and their viewers get a 5% discount, making the platform self-marketing. This is a key part of the incentive system that helps grow the user base by offering a payment method that opens up many customers who didn't have the ability to purchase due to the lack of payment options, which would make the influencers conversion rates a lot higher.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Discount Codes:</span> Apart from referral codes, discount codes also exist and will be distributed by the platform to attract sales.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Bank and PayPal Withdrawals:</span> Sellers can choose how they wish to withdraw their earnings, either through bank transfers or PayPal, adding flexibility to the platform’s financial system.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Top-Up System:</span> Users can top up their accounts by paying at any physical exchange office or bank. The funds are credited to the user’s account once the payment is confirmed. Once the funds are credited to the user's account, they can use them to make purchases and get products instantly.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Localized and International Payment Options:</span> Novakeys primarily serves the Serbian market, providing localized payment methods, bridging the gap for users who typically would not have access to digital marketplaces due to limited payment options. Also, NovaKeys supports international payments through credit and debit cards.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Automatic Emails:</span> Automated emails notify both users and sellers about key actions, such as orders, account notifications, and other relevant platform activities.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Cart System:</span> NovaKeys features both a guest and an authenticated cart. Users can use the cart system to add, remove, modify the quantity and purchase products, applying either referral or discount codes to their orders.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Multilingual Support:</span> The platform supports Serbian and English languages, allowing users to interact in their preferred language.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Multi-Currency Support:</span> EUR, RSD, and USD currencies are supported for seamless international transactions.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Dashboard:</span> Sellers have access to a complete dashboard to view their funds, pending funds, sales history, listings with keys, and the ability to modify those keys, seller inbox and more, helping them stay on top of their business.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Legal Compliance:</span> Novakeys includes fully customizable Terms of Service, Privacy Policy, and Refund Policy, ensuring compliance with legal standards and providing clarity to both users and sellers.
            </p>
        </section>

        <section class="mb-140">
            <h3 class="fw-bold mb-5">Technologies Used - NovaKeys</h3>
            <p><span class="color-purple">Frontend:</span> &nbsp; HTML, CSS, JavaScript</p>
            <p><span class="color-purple">Backend:</span> &nbsp; PHP, Laravel</p>
            <p><span class="color-purple">Database:</span> &nbsp; MariaDB</p>
            <p><span class="color-purple">Tools:</span> &nbsp; Postman, Git, OWASP ZAP</p>
        </section>

        <section class="mb-140">
            <NovaKeysShowcase />
        </section>

        <section class="mb-140">
            <h3 class="fw-bold mb-5">sklopi - A Feature-Rich PC Builder</h3>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Add the Build Components:</span> The user is free to create any component he wants.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Enter the Component Buy Links:</span> Add the links for where the component can be bought along with the pricing info.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Assign the Buy Link Delivery Group:</span> The user can create a new delivery group or assign an existing one to the buy link, the delivery group also tracks if, and at witch point, the delivery group's cost becomes free.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Just Order:</span> sklopi will take everything into account and display the best combination of buy links, along with the component prices and the total delivery price.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Want to Save More?:</span> You can make buy links for similar components from multiple stores, and thus make it more likely that sklopi can find a cheaper match according to the component prices and the delivery cost, for example you can add multiple SSD models of similar performance and capacity.
            </p>
            <p class="fs-6 mt-4 w-800 w-max-100 mx-auto">
                <span class="color-purple">Not Sure What to Get?:</span> You can create and have multiple builds on your account, so you can compare and decide what is best for you with all the information calculated for you.
            </p>
        </section>

        <section class="mb-90">
            <h3 class="fw-bold mb-5">Technologies Used - sklopi</h3>
            <p><span class="color-purple">Frontend:</span> &nbsp; HTML, CSS, JavaScript, Bootstrap</p>
            <p><span class="color-purple">Backend:</span> &nbsp; PHP, Laravel</p>
            <p><span class="color-purple">Database:</span> &nbsp; MySQL</p>
            <p><span class="color-purple">Tools:</span> &nbsp; Postman, Git, OWASP ZAP</p>
            <p><span class="color-purple">Hosting:</span> &nbsp; DigitalOcean</p>
        </section>

        <section class="mb-140">
            <a class="btn-purple mx-auto" href="https://sklopi.live" target="_blank">Go to sklopi.live</a>
        </section>

        <section>
            <a class="btn-purple mx-auto" href="https://github.com/MihajloPetrovicDev" target="_blank">My GitHub</a>
        </section>
    </main>
    <FooterBar />
</template>

<script>
import HeaderBar from './Header.vue';
import FooterBar from './Footer.vue';
import NovaKeysShowcase from './NovaKeysShowcase.vue';

export default {
    name: 'ProjectsPage',
    components: {
        HeaderBar,
        FooterBar,
        NovaKeysShowcase,
    },
};
</script>

<style scoped>
    @media (max-width: 300px) {
        h3 {
            font-size: 32px;
        }
    }
</style>