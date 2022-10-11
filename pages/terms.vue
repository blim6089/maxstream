<template>
  <div class="p-0 lg:p-6 bg-white rounded-lg shadow-none lg:shadow-card">
    <p class="font-ubuntu text-[32px] font-medium mb-8 leading-9">
      Terms of Service
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
            "Please read these Terms of Service (“Terms”, “Terms of Service”) carefully before using the www.maxstream.com website (the “Service”) operated by MaxStream, Inc (“us”, “we”, or “our”). <br /><br /> Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who wish to access or use the Service.<br /><br />By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you do not have permission to access the Service.",
        },
        {
          title: "Communications",
          description:
            "By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.",
        },
        {
          title: "Subscriptions",
          description:
            "Some parts of the Service are billed on a subscription basis (“Subscription(s)”). You will be billed in advance on a recurring and periodic basis (“Billing Cycle”). Billing cycles are set monthly, depending on the type of subscription plan you select when purchasing a Subscription.<br /><br />At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or MaxStream, Inc cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting MaxStream, Inc support team.<br /><br />A valid payment method, including credit card, is required to process the payment for your Subscription. You shall provide MaxStream, Inc with accurate and complete billing information including full name, address, state, zip code, telephone number, and a valid payment method information. By submitting such payment information, you automatically authorize MaxStream, Inc to charge all Subscription fees incurred through your account to any such payment instruments.",
        },
        {
          title: "Fee Changes",
          description:
            "MaxStream, Inc, in its sole discretion and at any time, may modify the Subscription fees for the Subscriptions. Any Subscription fee change will become effective at the end of the then-current Billing Cycle.<br /><br />MaxStream, Inc will provide you with a reasonable prior notice of any change in Subscription fees to give you an opportunity to terminate your Subscription before such change becomes effective.<br /><br />Your continued use of the Service after the Subscription fee change comes into effect constitutes your agreement to pay the modified Subscription fee amount.",
        },
        {
          title: "Content",
          description:
            "Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material (“Content”). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.<br /><br />By posting Content on or through the Service, You represent and warrant that: (i) the Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity. We reserve the right to terminate the account of anyone found to be infringing on a copyright.<br /><br />You retain any and all of your rights to any Content you submit, post or display on or through the Service and you are responsible for protecting those rights. We take no responsibility and assume no liability for Content you or any third party posts on or through the Service.<br /><br />MaxStream, Inc has the right but not the obligation to monitor and edit all Content provided by users.<br /><br />In addition, Content found on or through this Service are the property of MaxStream, Inc or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us.",
        },
        {
          title: "Accounts",
          description:
            "When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.<br /><br />You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.",
        },
        {
          title: "Copyright Policy",
          description:
            "We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes on the copyright or other intellectual property rights (“Infringement”) of any person or entity.<br /><br />If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to contact@streamyard.com, with the subject line: “Copyright Infringement” and include in your claim a detailed description of the alleged Infringement as detailed below, under “DMCA Notice and Procedure for Copyright Infringement Claims”<br /><br />You may be held accountable for damages (including costs and attorneys’ fees) for misrepresentation or bad-faith claims on the infringement of any Content found on and/or through the Service on your copyright.",
        },
        {
          title: "Third Party Service",
          description:
            '"Please read these Terms of Service (“Terms”, “Terms of Service”) carefully before using the www.maxstream.com website (the “Service”) operated by MaxStream, Inc (“us”, “we”, or “our”). <br /><br /> Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who wish to access or use the Service.<br /><br />By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you do not have permission to access the Service.',
        },
        {
          title: "Termination",
          description:
            "We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.<br /><br />If you wish to terminate your account, you may simply discontinue using the Service.<br /><br />All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.",
        },
        {
          title: "Disclaimer",
          description:
            "Your use of the Service is at your sole risk. The Service is provided on an “AS IS” and “AS AVAILABLE” basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.<br /><br />MaxStream, Inc its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.",
        },
        {
          title: "Exclusions",
          description:
            "Some jurisdictions do not allow the exclusion of certain warranties or the exclusion or limitation of liability for consequential or incidental damages, so the limitations above may not apply to you.",
        },
      ],
    };
  },
};
</script>