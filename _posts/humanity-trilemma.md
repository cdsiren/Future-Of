---
title: 'Navigating the Humanity Trilemma with NFTs'
coverImage: '/assets/blog/humanity-trilemma/cover.png'
date: '01.31.2023'
type: 'Blog'
excerpt: What’s next for NFTs? If the speculative bull market felt like a fever dream, the chill of the bear market has jolted the NFT world awake. In this state of clarity, it appears that non-financial NFTs might have their day in the sun. Non-financial NFT might sound like an oxymoron; in many ways, the term contradicts NFTs' demonstrated killer-app of equipping creators with capital markets.
topic: 'NFT Theory'
ogImage:
  url: '/assets/blog/humanity-trilemma/cover.png'
---

**What’s next for NFTs?** If the speculative bull market felt like a fever dream, the chill of the bear market has jolted the NFT world awake. In this state of clarity, it appears that non-financial NFTs might have their day in the sun. Non-financial NFT might sound like an oxymoron; in many ways, the term contradicts NFTs' demonstrated killer-app of equipping creators with capital markets. However, out of design or **[necessity](https://dune.com/queries/1549266/2594879)**, NFTs are trending to be used as a source of identity rather than revenue.

Much has been published about **[designing effective NFT releases](https://www.paradigm.xyz/2021/10/a-guide-to-designing-effective-nft-launches)** to maximize revenue or capitalize on hype, but how should releases be designed to advance goals of non-financial NFTs? For NFTs to successfully shift from providing financial services to enabling social, loyalty, and governance applications, release mechanisms should optimize for claims from unique, human-managed wallets. **Easier said than done.**  

Identity solutions all make explicit trade-offs between _portability_, _privacy_, and _personhood_. Each application has different acceptable thresholds of humanity. Most existing solutions solve for vertices, but web3 social is perhaps the great compromise required for effective releases of non-financial NFTs.

### **The Dawn of Non-Financial NFTs for Creators**

At Decent, we roughly think of non-financial NFTs as falling into one of three categories: _credentialing_, _brand distribution_, and _utilitarian_, with many issued as **[open editions](https://nftnow.com/features/for-better-or-worse-nft-open-editions-are-on-the-rise/)**. In each case, the primary purpose of the NFT is to collateralize a wallet with a trait. As a wallet collects more traits, the more its identity comes into focus.

More and more creators are using credentialing or branding NFTs to grow their communities. While having no immediate financial value, there is implicit potential that the holders of these NFTs might someday be rewarded via unique access, loyalty rewards, physical merch, etc. _The present value of these potential future rewards is proving to be a substantial carrot in attracting new fans or community members_. 

The business objective for creators is to convert as many impressions into paying customers as possible. The funnel from new audience impression to paying customer looks something like this:

![Conversion funnel for web3 social](https://substack-post-media.s3.amazonaws.com/public/images/be450e2e-3de3-4953-970e-4c036d1748d7_1130x980.png "Conversion funnel for web3 social")


Non-financial NFTs are extremely compelling because they **bridge an impression to an addressable wallet in real time and invert impression ownership**. A user can see a post on Lens and collect it with no thoughts surrounding its price.

In the case of traditional channels, the minimum threshold for addressability is an email address or phone number; both of which are incredibly difficult to collect. To put it into perspective, the average click-through-rate on **[Facebook & Twitter is only ~1.6%](https://statusbrew.com/insights/2021-social-media-benchmarks-facebook-instagram-twitter/#:~:text=twitter%20is%20%240.33.-,Click%2DThrough,CTR%20Twitter%20is%201.55%25.)**! Grabbing and retaining attention to any degree is like winning the lottery, but free NFTs promise to tilt the odds.  

Furthermore, _[collects (vs. clicks](https://zine.zora.co/clicks-vs-collectors-jacob) or impressions) accrue to the user themselves as opposed to the product_. This meaningfully advances web3 playing out as composable ecosystems as opposed to walled gardens. Collectors affirmatively claim that they saw something, adopting it as part of their composable identity, versus marketing teams leveraging siloed impression data to target unwitting viewers. Additionally, user owned impressions mean collectors are not reliant on a single platform to maintain their preferences or reputation. A single point of failure undermines login with Facebook but could be avoided by sign-in with Lens.

In the bear market, bottom funnel monetization via NFTs has become significantly more difficult as **[speculative returns have plummeted](https://dune.com/rchen8/opensea)** and collectors have less surplus income. With fan-to-paying fan conversion deteriorating, many creators are intelligently revisiting the top of their funnels. We expect non-financial NFTs to shine and lay the foundation for composable creator and platform micro-economies. 

### **The Humanity Trilemma**

_The primary goal of non-financial NFTs is to reach and retain human-managed wallets._  So, it’s really, really important collectors of non-financial NFTs must first pass some identity check!

‘Human-managed’ is probably conspicuous over-specification, but it refers to the difference between _legal_ and _fulfillment_ identity. Fulfillment identity is weaker, specifying only that a wallet is endowed with certain traits that meet a creator’s conditions. Legal identity endeavors to prove which government-recognized person is behind a wallet.

![Please see the end of the article for links.](https://substack-post-media.s3.amazonaws.com/public/images/23fb0083-590e-4e96-81de-8ee720b7d03c_1242x282.png "Please see the end of the article for links.")


Legal and fulfillment identity conditions exist on a pretty broad spectrum. The conditions creators set for issuing traits make trade-offs between protecting collectors’ privacy, portability of traits between applications, and certainty of personhood. A non-exhaustive mapping of popular identity solutions might look something like this:

![](https://substack-post-media.s3.amazonaws.com/public/images/5c32a3f4-6111-4a90-aec1-8291516a20f5_1136x768.png)


For example, **[Sismo](https://www.sismo.io/)** is a very desirable identity solution because it leverages a common standard to issue ERC 1155 credentials — interoperable with most web3 gating infrastructure. The protocol employs zero-knowledge issuance methods to prevent collectors from oversharing wallet information (NFTs issued for branding should probably not also collect the financial profiles embedded in wallet balances), and the tokens are soulbound and issued under fairly **[specific conditions](https://docs.sismo.io/sismo-docs/create-your-zk-badge/factory-guide)**. It would be both difficult and invaluable for a bot to claim a Sismo badge. Small plug, but this is the approach we’ve taken with zkSBTs at **[Decent](http://decent.xyz/)** as well.

By contrast, **[ENS](https://ens.domains/)** is extremely portable but is a desirable NFT for bots because certain names are financially valuable and there are no conditions for purchasing. Its lack of conditions means collectors can maintain anonymity, so it ranks highly on privacy but only by way of doing nothing to establish personhood — perhaps the clearest example of the trilemma in practice.

**[Proof of Humanity](https://proofofhumanity.id/)** and **[Worldcoin](https://worldcoin.org/)** maximize personhood guarantees but entirely dox users in the process and are maintained as registries, which are publicly accessible but not innately portable like NFT-based solutions.

Off-chain solutions like **[Ceramic](https://ceramic.network/)**, **[Disco](http://disco.xyz/)**, **[Lit](https://litprotocol.com/)**, **[Gitcoin](https://docs.passport.gitcoin.co/)**, **[Spruce (SIWE)](https://spruceid.com/)**, and **[Privy](https://privy.io/)** have discretion over their privacy guarantees. Ceramic as a base layer makes zero — all information, available to all — but Lit Protocol provides encryption atop Ceramic with access typically permitted as a function of highly portable NFTs. Their personhood and portability is generally a function of how they bridge data on-chain. For example, Gitcoin Passport registers stamps from other protocols and applications (e.g, ENS, Proof of Humanity, Twitter Auth) as verifiable credentials on Ceramic. Passport is relatively portable with fewer intrinsic guarantees of personhood given it relies on how the underlying stamps were issued — e.g., **weak**: ENS & Twitter auth w. anon account versus **strong**: Proof of Humanity.

In general, off-chain solutions are less portable than-on-chain counterparts; however, that’s not necessarily a bad thing. Verifiable credentials, like soulbound tokens (SBTs), ensure badges were earned, not purchased, providing high personhood guarantees without compromising collector privacy. Unlike SBTs though, there is no risk of **[negative reputation](https://vitalik.ca/general/2022/06/12/nonfin.html)**. Beyond the scope of this blog, but its merit is hotly debated. A key implication here is that no one of the solutions above is materially better or worse than others. Identity is too delicate to be rushed into and the right answer between trade-offs requires more, careful experimentation.

**Let’s bring it back to the creators.**

Non-financial NFTs are interesting to examine through this lens because in almost all cases fulfillment identity types are sufficient for establishing addressable wallets. Fulfillment identity is also more interesting and helpful for creators! What is the point of targeting outreach by demographic if not to maximize the willingness to pay of an average impression? Web3 creators can skip the demographic guesswork by catering to wallets that have already purchased similar assets or otherwise meet the creator’s desired traits.

However, it is always advantageous to the NFT issuer to collect as much information as possible on collectors. It’s pretty hard to say how this will resolve because it feels like something of a prisoner’s dilemma: we all cooperate to respect one another’s privacy to reach a great outcome versus cheat and farm user information to maximize individual welfare (_\*cough\*_ web2 social).

**Web3 Social’s Unlock**

Web3 social could be the first to find the Goldilocks zone of the humanity trilemma.  Take Lens for example:

*   _**Portability**_**:** profiles and the social graph uniting them are entirely managed through NFTs
    
*   _**Privacy**_**:** Similar to ENS, Lens is private in that it has a low personhood requirement
    
*   _**Personhood**_**:** Engagement with Lens applications constantly creates new associations between profile NFTs and applications.  Profile NFTs alone would be similarly attainable and desirable for bots as something like ENS; however, bot-owned profiles will likely have far fewer associations with other profiles than human-owned ones.  The network around a profile promises to be reliable evidence of personhood, _and_ it does not rely on any external dependencies that might compromise on privacy (e.g., Github auth for Sismo badge condition).  If an app does require legal identity, Lens Profiles can store external credentials such as Proof of Humanity, PolygonID, or verifiable credentials to triangulate identity across multiple validators.
    

Web3 social is particularly well-suited for creators issuing non-financial NFTs, as well, because clients like **[Lenster](https://lenster.xyz/)** double as **[meaningful distribution channels](https://dune.com/sixdegree/lens-protocol-creator-economics)**. Rather than attracting audiences to a bespoke site or independent platform, creators can leverage shared audiences to, in theory, reach and obtain more collectors than they would otherwise.

### **One Big Idea Claim Case Study: Web2 + Web3 Social Auth**

Our most compelling case study for non-financial NFTs to date was the **[One Big Idea Season 0](https://mint.onebigidea.xyz/)** listener badge claim. Austin Hurwitz required collectors submit their email addresses, follow him on Twitter, and follow him on Lens in order to claim one of 500 available badges. While not right for all creators, Austin’s claim minted out over the course of a day, providing him hundreds of new email addresses and social followers.  Collectors admittedly had a cumbersome number of conditions to meet in order to claim, and, yet, the potential future value of this NFT proved as a sufficient carrot to meaningfully grow Austin’s community.

The goal of Web2 + Web3 Social Auth was to reach mainstream audiences, funnel those through web3 platforms to create wallets, and capture those wallets as addressable via claiming an NFT.

**How We Built It:**

1.  Connect Wallet
    
    1.  How: **[Privy for authentication](https://www.privy.io/)**
        
    2.  Why: Privy generates identity objects on behalf of a wallet that can save off-chain information, like an email address, with a wallet.
        
2.  Confirm Email
    
    1.  How: the user enters their email address and receives a code to that email to validate.
        
    2.  Why:  An email is typically the minimum requirement for a fan to be in a creator’s funnel. The ability to promote opportunities to wallets of high-purchasing intent is valuable.
        
3.  Confirm Web2 Social Following
    
    1.  How: Twitter’s API with some custom caching to mitigate rate limits
        
    2.  Why: Necessary step to execute web2 → 3 social bridge from where creators primarily distribute their brands
        
4.  Confirm Web3 Social Following
    
    1.  How: Decent’s 721A token-gated contract
        
    2.  Why: This step bridges the gap between web2 → web3, asking collectors to verify from both their Twitter and Lens profiles which provides:
        
        1.  On-chain validation of credentials via **[Lens](https://www.lens.xyz/)** follower NFT (or any other token)
            
        2.  Proof of Humanity by limiting bot attacks through multi-step verification on- and off-chain
            
        3.  Allowlist that automatically updates in real time
            

**Conclusion**
--------------

As NFT prices have plummeted and individuals have left the space, those who stuck around were faced with an important question: _what value do NFTs really hold?_

There is no one right answer for how to navigate the proof-of-humanity trilemma, there are likely many. Tradeoffs should be deliberate and maximize the goal of the release.  While there are many exciting identity initiatives currently being developed, _we are particularly excited by the potential of web3 social to establish fulfillment identity during claims_.

At Decent, we’re very excited by creators issuing non-financial NFTs using web3 social as the check for identity to fill the Trust stage of their funnels.  We believe creators doing so are extremely well positioned to grow loyal audiences that will be readily monetizable.

### **Reference Links**

**Non-financial NFT Table Project Links**

*   [Sismo](https://www.sismo.io/)
    
*   [Rabbithole](https://app.rabbithole.gg/quests/trade-on-dydx)
    
*   [Mint Podcast Listener Badge](https://adamlevy.xyz/vault-collect-ethereum-or-polygon)
    
*   [Rainbow Zorbs](https://rainbow.me/drop/zorb)
    
*   [Reddit Collectible Avatars](https://www.reddit.com/r/CollectibleAvatars/)
    
*   [Uniswap v3 LP Positions](https://opensea.io/collection/uniswap-v3-positions)
    
*   [Lens Profile NFTs](https://opensea.io/collection/lens-protocol-profiles)
    
*   [Credit score SBTs](https://vitalik.ca/general/2022/06/12/nonfin.html)
    

**Identity Type Table Project Links:**

*   [Worldcoin](https://worldcoin.org/)
    
*   [Proof of Humanity](https://proofofhumanity.id/)
    
*   [Sybil Registry](https://sybil.org/#/delegates/compound)
    

**Humanity Trilemma Diagram Project Links:**

*   [ENS](https://ens.domains/)
    
*   [Rep3](https://rep3.gg/%5D%5C)
    
*   [Lit Protocol](https://litprotocol.com/)
    
*   [Spruce](https://spruceid.com/)
    
*   [Gitcoin Passport](https://docs.passport.gitcoin.co/)
    
*   [Ceramic Network](https://ceramic.network/)
    
*   [Lens Protocol](https://lens.xyz/)
    
*   [Sismo](https://www.sismo.io/)
    
*   [Disco](http://disco.xyz/)
    
*   [Privy](https://privy.io/)
    
*   [Farcaster](https://farcaster.network/)
    
*   [Worldcoin](https://worldcoin.org/)
    
*   [Proof of Humanity](https://proofofhumanity.id/)
