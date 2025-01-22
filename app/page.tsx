"use client"
import Header from "@/components/Header";
import ServiceBlock from "@/components/ServiceBlock";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <>
      <div className="container my-[80px] max-lg:my-[40px] relative">
        <h3 className="text-heading1 mb-[16px] max-lg:text-heading2Bold">
          Digital Services
        </h3>
        <p className="text-subheadingRegular max-lg:text-body-small">We turn your ideas into beautiful, functional websites and web apps that make your business stand out. With our smart website configurator, you'll know exactly what you're getting and how much it costs upfront. But we don't just build websites – we craft digital expressions of your unique business. By diving deep into your goals and identity, we create designs that don't just work but truly tell your story. For us, web design is more than a service – it's an art.</p>
      </div>
      <div className="relative">
        <svg className="absolute top-0 left-0 z-[-1] max-lg:hidden" width="100%" height="2">
          <line x1="0" y1="1" x2="100%" y2="1" stroke="#2A203A" strokeWidth="1" strokeDasharray="4, 4" />
        </svg>
        <svg className="absolute bottom-0 left-0 z-[-1] max-lg:hidden" width="100%" height="2">
          <line x1="0" y1="1" x2="100%" y2="1" stroke="#2A203A" strokeWidth="1" strokeDasharray="4, 4" />
        </svg>
        <div className="container border-[2px] border-secondary relative mb-[160px] max-lg:mb-[80px]">
          <ServiceBlock className="border-b-[2px] border-secondary relative" id="design">
            <svg className="absolute bottom-[-2px] left-[50%] translate-x-[-50%] z-[-1] max-lg:hidden" width="100vw" height="2">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="#2A203A" strokeWidth="1" strokeDasharray="4, 4" />
            </svg>
            <ServiceBlock.Title>Design</ServiceBlock.Title>
            <ServiceBlock.Subtitle>
              Choose a design service
            </ServiceBlock.Subtitle>
            <ServiceBlock.Content>
              <div className="grid grid-cols-3 gap-[24px] mt-[40px] max-md:grid-cols-1">
                <ServiceCard>
                  <ServiceCard.Title>UX/UI Design</ServiceCard.Title>
                  <ServiceCard.Description>
                    <div>Website, web or mobile app design</div>
                  </ServiceCard.Description>
              
                  <ServiceCard.Price>
                    <div className="text-Heading2Medium">From 900 CHF</div>
                    <div className="text-body-small ">(VAT excluded)</div>
                  </ServiceCard.Price>
                  <ServiceCard.Select variant="brand" />
                </ServiceCard>
                <ServiceCard>
                  <ServiceCard.Title>Logo Design</ServiceCard.Title>
                  <ServiceCard.Description>
                    <div>Description</div>
                  </ServiceCard.Description>
                  <ServiceCard.Price>
                    <div className="text-Heading2Medium">From 1500 CHF</div>
                    <div className="text-body-small ">(VAT excluded)</div>
                  </ServiceCard.Price>
                  <ServiceCard.Select variant="brand" />
                </ServiceCard>
                <ServiceCard>
                  <ServiceCard.Title>Brand Identity</ServiceCard.Title>
                  <ServiceCard.Description>
                    <div>Description</div>
                  </ServiceCard.Description>
            
                  <ServiceCard.Price>
                    <div className="text-Heading2Medium">From 6000 CHF</div>
                    <div className="text-body-small ">(VAT excluded)</div>
                  </ServiceCard.Price>
                  <ServiceCard.Select variant="brand" />
                </ServiceCard>
              </div>
            </ServiceBlock.Content>
          </ServiceBlock>
          <ServiceBlock className="border-b-[2px] border-secondary relative" id="web_development">
            <svg className="absolute bottom-[-2px] left-[50%] translate-x-[-50%] z-[-1] max-lg:hidden" width="100vw" height="2">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="#2A203A" strokeWidth="1" strokeDasharray="4, 4" />
            </svg>
            <ServiceBlock.Title>Website Development</ServiceBlock.Title>
            <ServiceBlock.Subtitle>
              <div className="text-body-mediun">Which one fits your needs?</div>
              <div>For a quick start, go with the Basic Landing Page. Need more features? Choose Standard. Want maximum impact? Go Premium. No matter which tier you choose, you can always add extra features later. We've crafted these packages to give you the best starting point for your goals.</div>
            </ServiceBlock.Subtitle>
            <ServiceBlock.Content>
              <div className="grid grid-cols-2 gap-[24px] mt-[40px] max-md:grid-cols-1">
                <ServiceCard>
                  <ServiceCard.Title>Essential</ServiceCard.Title>
                  <ServiceCard.Description>
                    <div>One-page website, 1 review</div>
                  </ServiceCard.Description>
                  <ServiceCard.Info tooltip={
                    <div className="p-[8px] max-w-[200px]">
                      <div className="text-body-regular">Includes:</div>
                      <ul className="list-disc pl-[16px] text-body-regular">
                        <li>User research</li>
                        <li>Wireframes</li>
                        <li>UI design</li>
                        <li>Prototyping</li>
                      </ul>
                    </div>
                  }>
                    Up to 5 Sections
                  </ServiceCard.Info>
                  <ServiceCard.Text className="mb-[24px]">Responsive design, basic layout</ServiceCard.Text>
                  <ServiceCard.Price>
                    <div className="text-Heading2Medium">From 900 CHF</div>
                    <div className="text-body-small ">(VAT excluded)</div>
                  </ServiceCard.Price>
                  <ServiceCard.Select variant="t1" />
                </ServiceCard>
                <ServiceCard>
                  <ServiceCard.Title>Starter</ServiceCard.Title>
                  <ServiceCard.Description>
                    <div>Business card website, 2 reviews</div>
                  </ServiceCard.Description>
                  <ServiceCard.Info tooltip={
                    <div className="p-[8px] max-w-[200px]">
                      <div className="text-body-regular">Includes:</div>
                      <ul className="list-disc pl-[16px] text-body-regular">
                        <li>User research</li>
                        <li>Wireframes</li>
                        <li>UI design</li>
                        <li>Prototyping</li>
                      </ul>
                    </div>
                  }>
Up to 10 Sections
                  </ServiceCard.Info>
                  <ServiceCard.Text className="mb-[24px]">Responsive design, basic SEO, 
                  modular structure</ServiceCard.Text>
                  <ServiceCard.Price>
                    <div className="text-Heading2Medium">From 3000 CHF</div>
                    <div className="text-body-small ">(VAT excluded)</div>
                  </ServiceCard.Price>
                  <ServiceCard.Select variant="brand" />
                </ServiceCard>
                <ServiceCard>
                  <ServiceCard.Title>Advanced</ServiceCard.Title>
                  <ServiceCard.Description>
                    <div>Corporate website, 4 reviews</div>
                  </ServiceCard.Description>
                  <ServiceCard.Info tooltip={
                    <div className="p-[8px] max-w-[200px]">
                      <div className="text-body-regular">Includes:</div>
                      <ul className="list-disc pl-[16px] text-body-regular">
                        <li>User research</li>
                        <li>Wireframes</li>
                        <li>UI design</li>
                        <li>Prototyping</li>
                      </ul>
                    </div>
                  }>
                    Up to 20 Sections
                  </ServiceCard.Info>
                  <ServiceCard.Text className="mb-[24px]">Responsive design, custom design, visual identity</ServiceCard.Text>
                  <ServiceCard.Price>
                    <div className="text-Heading2Medium">From 6000 CHF</div>
                    <div className="text-body-small ">(VAT excluded)</div>
                  </ServiceCard.Price>
                  <ServiceCard.Select variant="t3" />
                </ServiceCard>
                <ServiceCard>
                  <ServiceCard.Title>Elite</ServiceCard.Title>
                  <ServiceCard.Description>
                    <div>Website, web or mobile app design</div>
                  </ServiceCard.Description>
                  <ServiceCard.Info tooltip={
                    <div className="p-[8px] max-w-[200px]">
                      <div className="text-body-regular">Includes:</div>
                      <ul className="list-disc pl-[16px] text-body-regular">
                        <li>User research</li>
                        <li>Wireframes</li>
                        <li>UI design</li>
                        <li>Prototyping</li>
                      </ul>
                    </div>
                  }>
                    Up to 20 Sections
                  </ServiceCard.Info>
                  <ServiceCard.Text className="mb-[24px]">Responsive design, custom design, visual identity</ServiceCard.Text>
                  <ServiceCard.Price>
                    <div className="text-Heading2Medium">From 10000 CHF</div>
                    <div className="text-body-small ">(VAT excluded)</div>
                  </ServiceCard.Price>
                  <ServiceCard.Select variant="t4" />
                </ServiceCard>
              </div>
            </ServiceBlock.Content>
          </ServiceBlock>

          <ServiceBlock id="design_screens">
            <ServiceBlock.Title>Design</ServiceBlock.Title>
            <ServiceBlock.Subtitle>
              Choose a tier, based on approximate number of app screens you'd need for the project, so you could estimate its cost
            </ServiceBlock.Subtitle>
            <ServiceBlock.Content>
              <div className="grid grid-cols-3 gap-[24px] mt-[40px] max-md:grid-cols-1">
                <ServiceCard>
                  <ServiceCard.Title>Essential</ServiceCard.Title>
                  <ServiceCard.Description>
                    <div>Description</div>
                  </ServiceCard.Description>
                  <ServiceCard.Info tooltip={
                    <div className="p-[8px] max-w-[200px]">
                      <div className="text-body-regular">Includes:</div>
                      <ul className="list-disc pl-[16px] text-body-regular">
                        <li>User research</li>
                        <li>Wireframes</li>
                        <li>UI design</li>
                        <li>Prototyping</li>
                      </ul>
                    </div>
                  }>
                    Up to 10 Screens
                  </ServiceCard.Info>
                  <ServiceCard.Text>Responsive design, basic layout</ServiceCard.Text>
                  <ServiceCard.Price>
                    <div className="text-Heading2Medium">From 900 CHF</div>
                    <div className="text-body-small ">(VAT excluded)</div>
                  </ServiceCard.Price>
                  <ServiceCard.Select variant="t1" />
                </ServiceCard>
                <ServiceCard>
                  <ServiceCard.Title>Advanced</ServiceCard.Title>
                  <ServiceCard.Description>
                    <div>Description</div>
                  </ServiceCard.Description>
                  <ServiceCard.Info tooltip={
                    <div className="p-[8px] max-w-[200px]">
                      <div className="text-body-regular">Includes:</div>
                      <ul className="list-disc pl-[16px] text-body-regular">
                        <li>User research</li>
                        <li>Wireframes</li>
                        <li>UI design</li>
                        <li>Prototyping</li>
                      </ul>
                    </div>
                  }>
                    Up to 20 Screens
                  </ServiceCard.Info>
                  <ServiceCard.Text>Responsive design, basic layout</ServiceCard.Text>
                  <ServiceCard.Price>
                    <div className="text-Heading2Medium">From 3000 CHF</div>
                    <div className="text-body-small ">(VAT excluded)</div>
                  </ServiceCard.Price>
                  <ServiceCard.Select variant="brand" />
                </ServiceCard>
                <ServiceCard>
                  <ServiceCard.Title>Ultimate</ServiceCard.Title>
                  <ServiceCard.Description>
                    <div>Description</div>
                  </ServiceCard.Description>
                  <ServiceCard.Info tooltip={
                    <div className="p-[8px] max-w-[200px]">
                      <div className="text-body-regular">Includes:</div>
                      <ul className="list-disc pl-[16px] text-body-regular">
                        <li>User research</li>
                        <li>Wireframes</li>
                        <li>UI design</li>
                        <li>Prototyping</li>
                      </ul>
                    </div>
                  }>
                    Up to 40 Screens
                  </ServiceCard.Info>
                  <ServiceCard.Text>Responsive design, basic layout</ServiceCard.Text>
                  <ServiceCard.Price>
                    <div className="text-Heading2Medium">From 6000 CHF</div>
                    <div className="text-body-small ">(VAT excluded)</div>
                  </ServiceCard.Price>
                  <ServiceCard.Select variant="t3" />
                </ServiceCard>
              </div>
            </ServiceBlock.Content>
          </ServiceBlock>
          <svg
            className="absolute left-[-2px] bottom-0 translate-y-[100%] z-[-1] max-lg:hidden"
            width="2"
            height="180px"
          >
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="#2A203A"
              strokeWidth="1"
              strokeDasharray="4, 4"
            />
          </svg>
          <svg
            className="absolute right-[-2px] bottom-0 translate-y-[100%] z-[-1] max-lg:hidden"
            width="2"
            height="180px"
          >
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="#2A203A"
              strokeWidth="1"
              strokeDasharray="4, 4"
            />
          </svg>
        </div>

      </div>
    </>
  );
}