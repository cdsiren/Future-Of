---
title: 'Check Eligibility: A Roadmap to Navigate NFTs in 2023'
coverImage: '/assets/blog/check-eligibility/cover.png'
date: '01.02.2023'
type: 'blog'
topic: 'NFT Practice'
ogImage:
  url: '/assets/blog/check-eligibility/cover.png'
---

**What’s next for NFTs?**
-------------------------

Through the bear market, NFTs as a tool for crowdfunding and speculation has faded similarly to 2017 ICO predecessors supported by the same motivations.  The answer is beginning to come into focus as creators are prioritizing low-priced to free NFTs accomplish non-financial objectives.

_NFT releases targeting fan acquisition and retention are promising to drive 2023 NFT activity_.  At Decent, we are incredibly excited about how creators and developers are using our technology to develop novel NFT-based apps.  Today, we are introducing a web2 + 3 social auth template to equip creators and developers with another tool to advance the future of NFTs.

**The non-financial implementation trending most noticeably to product-market-fit is NFTs as carrots to drive social engagement and build addressable wallets.**

**2023 NFT Releases Target Top of Funnel Growth**
-------------------------------------------------

The revenue funnel for creators begins with web2 social distribution.  The goal is to convert the greatest percentage of your social impressions into paying customers.  Every tool built for the cultural markets\* exists between these bounds and crypto’s value is principally at the bottom of the funnel.  NFTs certainly can introduce creators to new audiences; however, the demonstrated 10x value is more efficient monetization.  Improved flow of funds and the ability to capture value parallel to content releases via the wisdom of crowds promises to revolutionize the cultural markets.

In the bear market, bottom funnel monetization via NFTs has become significantly more difficult as **[speculative returns have plummeted](https://dune.com/rchen8/opensea)**, eroding a principal collector motivation, and collectors have less surplus income.  With fan-to-paying fan conversion deteriorating, many creators are intelligently revisiting the top of their funnels.

Something we have believed at Decent since the beginning is that established social networks are poised to remain the primary distribution channel, but blockchain applications will become the financial rails.  _Each will capitalize on their comparative advantages to open new frontiers._  **The most pivotal step for creators using crypto is converting as many web2 impressions to addressable wallets as possible**.  This is important because, today, creators principally earn as a derivative of platforms’ or intermediaries, boxed into their business models.  Fans with wallets enables creators to monetize their work in real-time, completely autonomously.  Autonomous monetization is extremely important; I will cover why in separate posts - _is Spotify the limiting function or force multiplier for an artist’s income_?

**Today, we launched a case study of our solution to this step with Austin Hurwitz’s Season 0 listener badges: [Web2 + 3 Social Auth](https://mint.onebigidea.xyz/)** (s/o Adam Levy’s Mint s6 listener badge which helped shape a lot of this release).  _The goal with web2 + web3 social auth is to reach mainstream audiences, funnel those through web3 platforms to create wallets, and capture those wallets as addressable via either tokens or something like email addresses_.

**This is extremely exciting because it creates a direct bridge to onboard the next 10 million web3 users, and the motivation for crossing that bridge is rooted in unassailable properties of blockchains.**  People come not for ponzi games but to be in the inner circles of their favorite creators and participate in their success (creators bridge for better flow of funds; fans follow).  The NFT is ~free now to advance its principle objective of growing audiences; however, it could have speculative value for a litany of reasons across financial and access.

**The discounted future value of a free NFT is the carrot to bridge.**  Value can be calculated as either financial or status - would argue the same valuation methodology applies.

_To creators: you can maximize that value, remove uncertainty or target a massive and exciting goal.  The value of your NFTs should not be rooted in artificial scarcity to grow your audiences so use tools like NFT Staking, Bonding Curves, or Open Editions!!_

**One Big Idea Season 0 Claim Case Study**
------------------------------------------

_Breaking down the component pieces of web3 + 3 social auth_

To claim, collectors first hit "**[Check Eligibility](https://mint.onebigidea.xyz/)**" and are prompted to follow austin\_hurwitz.lens Lens, verify their email address and follow @austin\_hurwitz on Twitter before minting. Once completed collectors are prompted to join Austin’s Guild to gain access to the OBI Telegram group.

**Auth flow components:**

*   **Connect wallet:**
    
    *   _How_: using **[Privy](http://privy.io/)** as the wallet provider.
        
    *   _Why interesting_: Privy is part of a new breed of wallets that creates a **[DID](https://disco.mirror.xyz/UqHHismf1ookU2JMMkX2DPBA5PiTVF7-4vQkshTukEg)** for the user on connection.  This card can associate email and social handles with an address
        
*   **Confirm email:**
    
    *   _How_: user enters their email address and receives a note to that email to validate.  Note: this email can sometimes appear in spam so be sure to check there if it does not hit your inbox.
        
    *   _Why interesting_?  An email is typically the minimum requirement for a fan to be in a creator’s funnel.  The ability to promote opportunities to wallets of high-purchasing intent is valuable.
        
*   **Confirm socials:**
    
    *   This step is the 2 → 3 bridge, asking collectors to verify both their Twitter account and Lens profile
        
    *   **Confirm Lens follower NFT:**
        
        *   _How_: Decent 721A token-gate method
            
        *   _Why interesting_:
            
            *   **On-chain validation of credentials**
                
                *   Decent’s token-gate method verifies that the potential collector has a Lens follower NFT (could be any NFT) in their wallet.
                    
                *   _We believe it is extremely important that on-chain credentials (badges, tokens, etc.) are also validated on-chain and believe this gate to be the best solution in the market._
                    
            *   **Proof of Humanity:**
                
                *   On-chain validation means bots cannot attack the contract without engaging in at least one prior step
                    
                *   Because anyone can claim a follower NFT from Lens, it is an extremely weak measure.  However, we believe it lays the groundwork for exciting innovation in sybil resistance by using web3 social platforms for Proof of Humanity.  This is a strong use case for Lens as it is all on-chain, and there are already filtering mechanisms based on degrees of separation between followers to identity bots + their **[Proof of Humanity API](https://twitter.com/StaniKulechov/status/1609618602595958785?s=20&t=_T2KNO6BpKQqMLj6BvNDrw)**.
                    
                *   _Algorithmic social proof is an extremely compelling PoH solution and_ _could be web3 social’s killer app_ (if you’re already working on this - then I’d love to chat!)
                    
                *   Farcaster could be equally compelling as Dan Romero’s dm’s and personal filtering are could be the strongest proof of humanity that exists right now!  It’s just hilarious that it relies on one person’s Twitter dm’s today.
                    
                *   _I expect web3 social to really reinvent proof of humanity mechanisms in 2023.  In the NFTs as revenue era, many creators didn’t (& shouldn’t have) really cared whether their collectors were real, unique people.  In the NFTs as top of funnel era upcoming, creators should care very deeply._
                    
            *   **Dynamically updating allowlist\*\***
                
                *   _The token gate is proving to be a significant upgrade to allowlists because it can update in real time_:
                    
                    *   follow → mint vs. follow → batch new follows → republish allowlist later & tell potential collectors to try again.
                        
                *   This shares very similar sybil-resistance guarantees as a traditional allowlist while being a significantly better user experience
                    
                *   _**Most importantly, allowlists are really undesirable to attract new audiences because they are fixed and retrospective.  NFTs are only an effective carrot if potential collectors can meet the claim condition in real time!**_
                    
    *   **Confirm following on Twitter**
        
        *   _How_: Twitter’s API with some custom caching to mitigate ratelimits
            
        *   _Why interesting_:
            
            *   Necessary step to execute web2 → 3 social bridge
                
            *   Twitter (or other web2 socials) will be where creators primarily distribute their brands.  Web3 social will house fans with high-purchasing intent given willingness to bridge and presence of a wallet that is well suited to purchase new content as released.
                

**Launch your next project with a Decent template!**
----------------------------------------------------

_The social auth template is the fourth in a series that enables creators and developers to get up and running with custom minting and deployment sites faster than anywhere else._  We will be publishing this library to **[Decent](http://decent.xyz/)** in the coming days, but please see the list below in the meantime to start playing around today.

**[Start Decent](https://github.com/decentxyz/Start-Decent):** Next JS, RainbowKit, TailwindCSS & Decent SDK template to demonstrate how to use the Decent SDK and set up a custom deployment site.

*   Vercel demo link: [Start Decent](https://start-decent.vercel.app/)
    

**[AI NFTs](https://github.com/cdsiren/ai-generated-nfts)**: Forked from Start Decent, this repository enables users to deploy NFTs with images generated from DALLE 2 prompts.  This template requires a DALLE API key.

*   Template in action: [Decent x Dalle](http://ai.decent.xyz/)
    

**[Minting Page](https://github.com/decentxyz/Minting-Page)**: Forked from Start Decent, this template lets users stand up a custom minting page to provide collectors with an experience that is uniquely yours.  To see just how easy it is (& the breadth of Decent HQ!), please check out my [YouTube tutorial](https://www.youtube.com/watch?v=s72S5_5HWAk).

*   Template in action: J [Dilla Release](https://mint.burble.it/)
    

**[Social Auth](https://github.com/cdsiren/Social-Auth-Mint)**: Cloned from Minting Page, this template asks users to confirm their email address and that they follow the creator on Twitter and Lens prior to deploying.  _This repository is currently in beta.  We are publishing it as an MVP with the hope that the community will close out our roadmap.  We will be sure to recognize & reward contributors!  If you are interested in using or contributing to this template, please DM me on Twitter [@cdurbinxyz](https://twitter.com/cdurbinxyz).  Look forward to hearing from you!_

*   Template in action: [OBI Season 0](https://mint.onebigidea.xyz/)
    

Template pages will be prominently featured on Decent in the coming weeks.  Creators and developers to jointly contribute to build an interesting future for NFTs that does justice to all the primitive has to offer!

* * *

### **Endnotes**

\*_Think Creator Economy.  I am not a huge fan of the term “Creator Economy.”  It has become overused and naming the market by its participants does not reflect the nature of its dynamics.  At Decent, we use “Cultural Markets” instead.  We define Cultural Markets as those in which price is almost entirely behavioral._

_The price of a cultural good (a song, piece of art, a public good, a meme or viral social post) is continuous and determined strictly by how many people agree that the product or its creator is valuable (fwiw this is also why bonding curves are so attractive - see Simon’s piece on **[trading memes](https://medium.com/@simondlr/introducing-curation-markets-trade-popularity-of-memes-information-with-code-70bf6fed9881)**).  I believe consumer preference (& how taste is formed) is a more accurate indicator of what drives the creator economy so like to use cultural markets instead._

_\*\*The token-gate method in Decent’s Editions and Rentable contracts is one of the most exciting and least well understood features in the Decent protocol.  It can have significant implications across both NFTs & DeFi (anyone’s mind wander to fixed exchange rates??)  We’ll be publishing an additional blog to highlight all its potential implementations across NFTs and DeFi_.

* * *

**Thanks for reading! While you’re here, you might want to check out another post I wrote in March 2022: [What Lies Beyond Patronage? Crypto’s Role in the Creator Economy](https://mirror.xyz/durbin.eth/EH7FaX8YW9gCY9gCf9o81Pm6x86Us3pp5XWYAxCwc7k).** In many ways, today’s post is an extension of this prior one. I believe the 1K True Fans thesis is badly misunderstood. These posts are to (hopefully) help creators create the best outcomes for themselves.

**Reality of 1K True Fans:**

> Let’s take music as an example.  The average person can only name  [10 to 20 artists](https://www.digitalmusicnews.com/2013/02/19/fan/#:~:text=%E2%80%9CThe%20average%20person%20knows%20between,to%2020%20artists%2C%20that's%20it.), that’s it.  More artists than ever are [reaching 1M streams](https://loudandclear.byspotify.com/) and [old songs are remaining popular](https://www.theatlantic.com/ideas/archive/2022/01/old-music-killing-new-music/621339/) longer than ever.  Therefore, competition for spots 1-20 in fans’ mindshare has increased as top artists are effectively retaining fans, and the long tail is acquiring new fans at an unprecedented rate.  Visualize this as a consolidation of preferences in spots 1-10 and fragmentation across spots 10-20.  If an artist slots anywhere into places 1-20, we can assume that they are safely in the red area of the chart above.
> 
> **This is where the attention economy piece comes into play: each fan only has so much time to allocate to streaming music.  Getting into spots 1-20 is structurally zero-sum.  To retain mindshare, an artist has to displace another; to displace another, a fan has to stream that artist instead of another.  Fans have an unlimited quantity of songs for essentially zero marginal cost (fixed fee subscription priced well below consumption); therefore, time ends up dictating quantity.  For each fan, time is zero-sum, which means composing fan bases is cannibalistic among creators.**