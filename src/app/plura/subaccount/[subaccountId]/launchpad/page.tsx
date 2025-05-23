// import BlurPage from '@/components/plura/global/blur-page'
// import { Button } from '@/components/plura/ui/button'
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from '@/components/plura/ui/card'
// import { db } from '@/lib/db'
// // import { stripe } from '@/lib/stripe'
// import { getStripeOAuthLink } from '@/lib/utils'
// import { CheckCircleIcon } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// type Props = {
//   searchParams: {
//     state: string
//     code: string
//   }
//   params: { subaccountId: string }
// }

// const LaunchPad = async ({ params, searchParams }: Props) => {
//   const subaccountDetails = await db.subAccount.findUnique({
//     where: {
//       id: params.subaccountId,
//     },
//   })

//   if (!subaccountDetails) {
//     return
//   }

//   const allDetailsExist =
//     subaccountDetails.address &&
//     subaccountDetails.subAccountLogo &&
//     subaccountDetails.city &&
//     subaccountDetails.companyEmail &&
//     subaccountDetails.companyPhone &&
//     subaccountDetails.country &&
//     subaccountDetails.name &&
//     subaccountDetails.state

//   const stripeOAuthLink = getStripeOAuthLink(
//     'subaccount',
//     `launchpad___${subaccountDetails.id}`
//   )

//   let connectedStripeAccount = false

//   if (searchParams.code) {
//     if (!subaccountDetails.connectAccountId) {
//       try {
//         const response = await stripe.oauth.token({
//           grant_type: 'authorization_code',
//           code: searchParams.code,
//         })
//         await db.subAccount.update({
//           where: { id: params.subaccountId },
//           data: { connectAccountId: response.stripe_user_id },
//         })
//         connectedStripeAccount = true
//       } catch (error) {
//         console.log('🔴 Could not connect stripe account', error)
//       }
//     }
//   }

//   return (
//     <BlurPage>
//       <div className="flex flex-col justify-center items-center">
//         <div className="w-full h-full max-w-[800px]">
//           <Card className="border-none ">
//             <CardHeader>
//               <CardTitle>Lets get started!</CardTitle>
//               <CardDescription>
//                 Follow the steps below to get your account setup correctly.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="flex flex-col gap-4">
//               <div className="flex justify-between items-center w-full h-20 border p-4 rounded-lg ">
//                 <div className="flex items-center gap-4">
//                   <Image
//                     src="/appstore.png"
//                     alt="App logo"
//                     height={80}
//                     width={80}
//                     className="rounded-md object-contain"
//                   />
//                   <p>Save the website as a shortcut on your mobile devide</p>
//                 </div>
//                 <Button>Start</Button>
//               </div>
//               <div className="flex justify-between items-center w-full h-20 border p-4 rounded-lg">
//                 <div className="flex items-center gap-4">
//                   <Image
//                     src="/stripelogo.png"
//                     alt="App logo"
//                     height={80}
//                     width={80}
//                     className="rounded-md object-contain "
//                   />
//                   <p>
//                     Connect your stripe account to accept payments. Stripe is
//                     used to run payouts.
//                   </p>
//                 </div>
//                 {subaccountDetails.connectAccountId ||
//                 connectedStripeAccount ? (
//                   <CheckCircleIcon
//                     size={50}
//                     className=" text-primary p-2 flex-shrink-0"
//                   />
//                 ) : (
//                   <Link
//                     className="bg-primary py-2 px-4 rounded-md text-white"
//                     href={stripeOAuthLink}
//                   >
//                     Start
//                   </Link>
//                 )}
//               </div>
//               <div className="flex justify-between items-center w-full h-20 border p-4 rounded-lg">
//                 <div className="flex items-center gap-4">
//                   <Image
//                     src={subaccountDetails.subAccountLogo}
//                     alt="App logo"
//                     height={80}
//                     width={80}
//                     className="rounded-md object-contain p-4"
//                   />
//                   <p>Fill in all your business details.</p>
//                 </div>
//                 {allDetailsExist ? (
//                   <CheckCircleIcon
//                     size={50}
//                     className=" text-primary p-2 flex-shrink-0"
//                   />
//                 ) : (
//                   <Link
//                     className="bg-primary py-2 px-4 rounded-md text-white"
//                     href={`/subaccount/${subaccountDetails.id}/settings`}
//                   >
//                     Start
//                   </Link>
//                 )}
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </BlurPage>
//   )
// }

// export default LaunchPad




import React from 'react';
import BlurPage from '@/components/plura/global/blur-page';
import { Button } from '@/components/plura/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/plura/ui/card';
import { CheckCircleIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  searchParams: {
    state: string;
    code: string;
  };
  params: { subaccountId: string };
};

const LaunchPad = ({ params, searchParams }: Props) => {
  // Dummy data replacing the database call
  const subaccountDetails = {
    id: params.subaccountId,
    address: '123 Main St',
    subAccountLogo: '/logo.png',
    city: 'Sample City',
    companyEmail: 'info@example.com',
    companyPhone: '123-456-7890',
    country: 'USA',
    name: 'Sample Company',
    state: 'Sample State',
    connectAccountId: 'acct_dummy123', // Dummy Stripe account ID
  };

  // Check if all required details exist
  const allDetailsExist =
    subaccountDetails.address &&
    subaccountDetails.subAccountLogo &&
    subaccountDetails.city &&
    subaccountDetails.companyEmail &&
    subaccountDetails.companyPhone &&
    subaccountDetails.country &&
    subaccountDetails.name &&
    subaccountDetails.state;

  // Dummy Stripe OAuth link
  const stripeOAuthLink = 'https://example.com/dummy-stripe-oauth-link';

  // Determine if the Stripe account is connected based on dummy data
  const connectedStripeAccount = !!subaccountDetails.connectAccountId;

  return (
    <BlurPage>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full h-full max-w-[800px]">
          <Card className="border-none">
            <CardHeader>
              <CardTitle>Let's Get Started!</CardTitle>
              <CardDescription>
                Follow the steps below to get your account set up correctly.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {/* Step 1: Save Shortcut */}
              <div className="flex justify-between items-center w-full h-20 border p-4 rounded-lg">
                <div className="flex items-center gap-4">
                  <Image
                    src="/appstore.png"
                    alt="App logo"
                    height={80}
                    width={80}
                    className="rounded-md object-contain"
                  />
                  <p>Save the website as a shortcut on your mobile device.</p>
                </div>
                <Button>Start</Button>
              </div>

              {/* Step 2: Connect Stripe */}
              <div className="flex justify-between items-center w-full h-20 border p-4 rounded-lg">
                <div className="flex items-center gap-4">
                  <Image
                    src="/stripelogo.png"
                    alt="Stripe logo"
                    height={80}
                    width={80}
                    className="rounded-md object-contain"
                  />
                  <p>
                    Connect your Stripe account to accept payments. Stripe is used
                    to run payouts.
                  </p>
                </div>
                {connectedStripeAccount ? (
                  <CheckCircleIcon
                    size={50}
                    className="text-primary p-2 flex-shrink-0"
                  />
                ) : (
                  <Link
                    className="bg-primary py-2 px-4 rounded-md text-white"
                    href={stripeOAuthLink}
                  >
                    Start
                  </Link>
                )}
              </div>

              {/* Step 3: Fill Business Details */}
              <div className="flex justify-between items-center w-full h-20 border p-4 rounded-lg">
                <div className="flex items-center gap-4">
                  <Image
                    src={subaccountDetails.subAccountLogo}
                    alt="Subaccount logo"
                    height={80}
                    width={80}
                    className="rounded-md object-contain p-4"
                  />
                  <p>Fill in all your business details.</p>
                </div>
                {allDetailsExist ? (
                  <CheckCircleIcon
                    size={50}
                    className="text-primary p-2 flex-shrink-0"
                  />
                ) : (
                  <Link
                    className="bg-primary py-2 px-4 rounded-md text-white"
                    href={`/subaccount/${subaccountDetails.id}/settings`}
                  >
                    Start
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </BlurPage>
  );
};

export default LaunchPad;

