<template>
  <div class="p-0 lg:p-6 bg-white rounded-lg shadow-none lg:shadow-card">
    <p class="font-ubuntu text-[32px] font-medium mb-8 leading-9">
      Privacy Policy
    </p>
    <div>
      <div v-for="(term, index) in terms" :key="index" class="p-4 mb-4">
        <p class="font-ubuntu font-medium text-lg mb-4">{{ term.title }}</p>
        <p class="text-sm text-[#383838]" v-html="term.description"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "withSearch",
  data: function () {
    return {
      terms: [
        {
          title: "Acceptance",
          description:
            "MaxStream, Inc (“us”, “we”, or “our”) operates the www.maxstream.com website (the “Service”).<br /><br />This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service.<br /><br />We will not use or share your information with anyone except as described in this Privacy Policy.<br /><br />We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible at maxstream.com/resources/docs/tos.",
        },
        {
          title: "Information Collection And Use",
          description:
            "While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your email address, name, other information (“Personal Information”).<br /><br />We collect this information for the purpose of providing the Service, identifying and communicating with you, responding to your requests/inquiries, servicing your purchase orders, and improving<br /><br /> services.",
        },
        {
          title: "Log Data",
          description:
            "We may also collect information that your browser sends whenever you visit our Service (“Log Data”). This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics.<br /><br />In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this type of information in order to increase our Service’s functionality. These third party service providers have their own privacy policies addressing how they use such information.",
        },
        {
          title: "Cookies",
          description:
            "Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and transferred to your device. We use cookies to collect information in order to improve our services for you.<br /><br />You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. The Help feature on most browsers provide information on how to accept cookies, disable cookies or to notify you when receiving a new cookie.<br /><br />If you do not accept cookies, you may not be able to use most features of our Service and we recommend that you leave them turned on.",
        },
        {
          title: "Do Not Track Disclosure",
          description:
            "We support Do Not Track (“DNT”). Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked.<br /><br />You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.",
        },
        {
          title: "Service Providers",
          description:
            "We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services and/or to assist us in analyzing how our Service is used.<br /><br />These third parties have access to your Personal Information only to perform specific tasks on our behalf and are obligated not to disclose or use your information for any other purpose.",
        },
        {
          title: "Business Transaction",
          description:
            "If MaxStream, Inc is involved in a merger, acquisition or asset sale, your Personal Information may be transferred as a business asset. In such cases, we will provide notice before your Personal Information is transferred and/or becomes subject to a different Privacy Policy",
        },
        {
          title: "Security",
          description:
            "The security of your Personal Information is important to us, and we strive to implement and maintain reasonable, commercially acceptable security procedures and practices appropriate to the nature of the information we store, in order to protect it from unauthorized access, destruction, use, modification, or disclosure.<br /><br />However, please be aware that no method of transmission over the internet, or method of electronic storage is 100% secure and we are unable to guarantee the absolute security of the Personal Information we have collected from you.",
        },
        {
          title:
            "Personal Information Collected From Connected Third Party Accounts",
          description:
            "If you link MaxStream to a third party account, we may collect and store certain information.<br /><br />MaxStream may allow you to connect a YouTube channel to your MaxStream account. In this case, we will access certain information from YouTube about your channel using YouTube API Services. We may collect channel title, channel thumbnail, username / profile ID, email, access tokens, and live broadcasts. This includes information related to your live videos (such as comments, live viewer counts, ingest address, stream name). If you decide to connect a YouTube channel to your MaxStream account, see Google’s privacy policy. When disconnecting a YouTube channel on MaxStream, MaxStream will delete the stored data associated with that YouTube channel. In addition, you can revoke access via Google’s security settings page.",
        },
        {
          title: "Children’s Privacy",
          description:
            "Only persons age 18 or older have permission to access our Service. Our Service does not address anyone under the age of 13 (“Children”).<br /><br />We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you learn that your Children have provided us with Personal Information, please contact us. If we become aware that we have collected Personal Information from a child under age 13 without verification of parental consent, we take steps to remove that information from our servers.",
        },
        {
          title: "Change To This Privacy Policy",
          description:
            "This Privacy Policy is effective as of Friday, July 20th, 2018 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.<br /><br />We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.<br /><br />If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.",
        },
      ],
    };
  },
};
</script>