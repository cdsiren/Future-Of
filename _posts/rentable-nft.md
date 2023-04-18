---
title: 'Rentable NFTs'
coverImage: '/assets/blog/rentable-nfts/cover.png'
date: '02.14.2023'
type: 'Blog'
topic: 'NFT Theory'
ogImage:
  url: '/assets/blog/rentable-nfts/cover.png'
---

Usually watermarked images are a real non-starter, but, in a discussion about property rights, it feels more than appropriate. Sure, I could have found this cartoon in its original source, right-click saved, and spread the meme. The author might be happy to receive the additional distribution, but - the fact that this image was watermarked - really makes it quite clear the original publisher actually established intellectual property around this work to be compensated for usage.

Okay, time to talk about NFTs.

### **What are rentables?**

#### Rentable NFTs enable someone to use someone else’s NFT for a fixed period of time.

For example, let’s say I really wanted to go to the **[Bored Ape Yacht Club’s NFT NYC event](https://apefest.com/)** last summer. A BAYC or Mutant Ape (MAYC) NFT was required for entry, so, unfortunately, as a non-Ape owner, I am really out of luck. I could try to buy one, but I’m not really sure how I feel about BAYC’s as an investment, and I certainly don’t value entry to the event at >$100K. However, I’d pay a couple hundred bucks for single day access to see Lil Wayne, Snoop Dogg & Eminem perform. Probably half eligible NFT holders did not attend the event (venue capacity of 20K + 30K eligible holders). **Any one of those that did not attend could have rented their NFT to me, so that I could claim a ticket, and they could earn a few hundred bucks just for being a collector.**

The collector is better off because, at present, Ape Fest generates zero utility value; I am better off because I value the experience at least as much as I paid to rent the _ticket_; and the venue and all the event vendors are better off because their profits are directly correlated with event attendance. This is just one example to set the stage, but you can see how rentable NFTs begin to open new frontiers of pareto efficiency. _This is a very big deal_.

Decent’s Rentable NFTs use **[EIP 4907](https://eips.ethereum.org/EIPS/eip-4907)**. The base mechanic is really simple: the contract contains a `user` role in addition to the standard `owner` role. The user can be assigned to an address that is not the owner for a fixed period of time; after which, the role is automatically revoked. For those deep in the EIP game, 4907 is very similar to the proposal for subscription NFTs, **[EIP 5643](https://eips.ethereum.org/EIPS/eip-5643)**, except `isRenewable` is always false.

The key technical aspect to understand with rentables is that the NFT is _always_ owned by the original collector. If you make your NFT available to rent, even when someone is actively renting your NFT, _you still own it and it will still appear in your wallet_. It does not affect ownership of an NFT so can thereby be considered secure.

**Why should I really care?**
-----------------------------

Rentable NFTs are bigger than Ape Fest tickets, much bigger. **If you subscribe to the idea NFTs are meant to be digital property rights, all NFTs should be rentable**. _All NFTs should be rentable if we want them to represent digital property rights for three tightly related reasons:_

### **1) Property rights exist to create investment efficiency**

Property rights facilitate two things: allocative efficiency and investment efficiency. Allocative efficiency means every good ends up in the hands of the person that values it most. Pure speculative NFT trading can still yield optimal allocative efficiency (in theory…). Investment efficiency means each asset ends up in the hands of the person who can grow its value most. Because the only way to capture value from investment into an NFT is to turn around and sell that NFT, there is very little way to measure investment efficiency and very little incentive to invest time, energy, or capital into anything.

A high performance economy makes smart trade-offs between investment and allocative efficiency (**[Harberger taxes](https://medium.com/@simondlr/what-is-harberger-tax-where-does-the-blockchain-fit-in-1329046922c6)** are a good thought experiment here). _The current state of NFTs is all allocative at the expense of investment - this is absolutely not the best trade-off._ It disproportionately accrues value to those that are already wealthy, leads to exceptionally low utilization rates of the assets themselves, and cripples socio-economic mobility.

Some of you will disagree with this take arguing the next secondary sale is a sufficient value capture event. In the case of art, this is true. In almost every other case, it is not. **NFTs are bigger than art sales**. **They will never reach their potential under the current market structure.**

### **2) Property rights establish ownership over assets. Assets are valued based on their future cash flows**

**Rentable NFTs are a big deal because they enable property owners to earn on the labor they invest into their holdings.**

Virtually every asset is valued as the net present value of its future cash flows. Analysts use discounted cash flow models (**[DCFs](https://www.investopedia.com/terms/d/dcf.asp)**) to forecast a company’s, a building’s, a plot of land’s, a vaccine’s revenue potential over the next, typically, five to ten years. Without going into too much detail into the valuation methodology, the important point is that almost every asset is valued by how much money someone can make holding it.

The future cash flows of _every_ NFT is $0 (barring NFT lending protocols - admittedly, being hyperbolic here to emphasize a mostly true point). **Why would anyone meaningfully invest into an asset that would trade for $0?** I think the answer for NFTs to date is people would actually pay to expend labor on the communities they’re of which they’re apart. That’s totally fine, BUT it’s also insufficient for NFTs to realize their potential.

If we want NFTs to represent and be treated as real assets, they need to generate cash flows. (if we don’t, also fine, but then people are holding property rights to individual enjoyment which requires zero formal rights and can be found in all sorts of non-financial places…).

### **3) Property rights foster inclusive institutions**

Rentables reinforce property rights by making ownership valuable. A landlord buys a building for the purpose of renting the units. While technically property rights can exist over goods with no economic value, we certainly care more about who owns something when that thing generates revenue. _Strong socio-economic regimes are built on strong property rights._

This isn’t a little “oh that’s cool” thing, this is a **[why nations fail](https://en.wikipedia.org/wiki/Why_Nations_Fail#:~:text=Why%20Nations%20Fail%3A%20The%20Origins,Robinson.)** level thing. As we “speedrun the history of finance” (ty **[Bankless](https://www.bankless.com/)**), **transcribing property rights on-chain is arguably the most important step for digital-native economies to flourish.** As Acemoglu and Robinson observe in their seminal macro-economic paper, the fundamental difference in prosperity between nations is the ability to foster inclusive institutions. _Picture North & South Korea or border cities Nogales (Sonora, Mexico) and Nogales (Arizona, USA): both have virtually identical resources with genuinely opposite levels of prosperity._

**Of the statements below, which one sounds more like the current state of NFTs?**

1.  _“\[NFTs\] protect the property rights of wide sections of society (not just the elite), they do not allow unjustified alienation of property, and they allow all citizens to participate in economic relations in order to make a profit” - [source](https://en.wikipedia.org/wiki/Why_Nations_Fail#:~:text=Why%20Nations%20Fail%3A%20The%20Origins,Robinson.)_
    
2.  _“\[NFTs\] exclude large segments of the population from the distribution of income from their own activities. They prevent everyone except the elite from benefiting from participation in economic relations, who, on the contrary, are allowed to even alienate the property of those who do not belong to the elite.” - [source](https://en.wikipedia.org/wiki/Why_Nations_Fail#:~:text=Why%20Nations%20Fail%3A%20The%20Origins,Robinson.)_
    

If you picked option 2, you believe the current state of NFTs is one of extractive institutions. Of the examples above, North Korea and Nogales Mexico are the result of extractive institutions.

Rentables promise statement 1, inclusive institutions, by enabling economic prosperity without liquidation. If the only way to capture a value’s asset is to sell it, the likely outcome is vast economic inequality where the rich get perpetually richer. As the inequality widens, the future ability to implement extractive institutions increases.

**Some example implementations**
--------------------------------

Zooming out to the scope of property rights and their role in societies is important in understanding the scope of what we are trying to accomplish with web3. However, it can be really abstract, so I’ll wrap up with some concrete examples.

First, a prediction. **I think rentables will usher in a new era of NFTs where we strictly refer to them as the utility they provide.** For example, if you set up a subscription with an NFT, it will just be called a subscription and no one will ever know about the NFT. We believe the market for “NFT-facilitated activities where you don’t know about the NFT” is much larger than the market for NFT trading.

Some immediately applicable areas for rentables:

1.  **Access:** if an NFT’s utility predicated on token-gating or tickets to events, it should be rentable. See the Ape Fest example above. There’s tons of deadweight loss here rentables clean out.
    
2.  **Delegated Claiming for Airdrops:** crypto is a dangerous place - click on a bad link and, poof, wallet is drained. Accidentally send your NFT to the wrong place, you’re out of luck. Airdrops should recognize the `user` role and NFT holders should be able to rent their NFT to a separate hot wallet to claim the airdrop. This protects users if the link is malicious and mitigates the need to ever transfer NFTs out of a hardware wallet.
    
3.  **Incentive aligned creator royalties**: this isn’t necessarily a product just so much as a plausible solution to a hot button debate. _All NFTs could have zero creator royalties on sales but a 10% royalty on rentals._ In theory, rentals will only occur if the community - led by the creator - is still creating value. This would prevent creators from ever profiting off death-spirals and disincentivize rugs.
    
4.  **NFTs x DeFi:** cash flow sources for NFTs exist in DeFi: e.g., NFTfi, BendDAO, Uni v3 LP positions. NFTs either in pools or denoting LP positions should be rentable. A lot more to dive into here but probably warrants a separate post
    
5.  **Web3 gaming:** play-to-earn. Level-up: rent your powers. Not much of a gamer tbh, but I think this is the best, non-ponzi version of play-to-earn. Games are pretty good instantiations of digital economies. As shown above, ability to earn on property is fundamental to a strong economy so overall this seems to directionally be the right idea for a lot of games.
    
6.  **On-chain subscriptions:** as mentioned above, EIP 4907 and the actual subscription EIP, 5643 are relatively similar. With a little work, rentables could be tweaked into on-chain subscriptions. We’ll see a lot more of these as companies look to monetize their protocols or open source software with middleware applications.
    

* * *

That’s it for now! As you can tell, at [Decent](http://decent.xyz/), we think rentables are a much larger paradigm shift than any one application. We have a few ideas as to how apps can leverage rentables short-term but are even more excited by the long term implications of rentables.

If you have any ideas as to how to use rentables in your next project, we’d love to build with you! Reach out to me [@cdurbinxyz](https://twitter.com/cdurbinxyz) or our team [@decentxyz](https://twitter.com/decentxyz).