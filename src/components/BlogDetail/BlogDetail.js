import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import './BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const blogs = {
    'ai-legislative-networks': {
      title: "Understanding Legislative Networks: Building a Knowledge Graph of UK Legislation",
      date: "16th March 2024",
      readTime: "8 min read",
      image: "/assets/ai-legislation-blog.svg",
      author: "Aurygen Technologies research team",
      tags: ["Artificial Intelligence", "Legal Technology", "Data Analysis", "Government Innovation"],
      content: [
        {
          type: "paragraph",
          text: "At Aurygen Technologies, we believe innovation works best when shared openly. That's why we're excited to explore the latest developments in legislative technology, particularly the groundbreaking work on network analysis tools for understanding legislative connections."
        },
        {
          type: "heading",
          text: "The Challenge of Legislative Complexity"
        },
        {
          type: "paragraph",
          text: "Public trust in government AI initiatives begins with robust data foundations, and UK legislation provides an exemplary starting point. It's publicly accessible, well-structured, affects everyone's lives, and doesn't exist in isolation. Each law connects to others through an intricate web of references, amendments, and shared domains."
        },
        {
          type: "paragraph",
          text: "For policymakers, researchers, and legal professionals, understanding these connections is crucial but traditionally requires extensive domain knowledge and experience. What if we could visualise and analyse these relationships systematically?"
        },
        {
          type: "heading",
          text: "Technical Innovation in Legal Analysis"
        },
        {
          type: "paragraph",
          text: "Recent developments have shown how open-source tools can create and analyse knowledge graphs of UK legislation. The development process involves several key iterations: analysing legislative data structure, understanding how citations and amendments are represented, building focused analyses starting with specific acts, and developing comprehensive systems that process both in-text citations and XML commentary references."
        },
        {
          type: "heading",
          text: "Real-World Applications: IP Law and Data Protection"
        },
        {
          type: "paragraph",
          text: "Consider a comprehensive legislative graph containing over 820,000 nodes (legislation and provisions) and 2.2 million edges (connections between them). By examining the relationship between the Intellectual Property Act 2014 and the Data Protection Act 2018, fascinating patterns emerge."
        },
        {
          type: "paragraph",
          text: "The Intellectual Property Act 2014 connects to over 70 pieces of legislation, forming a distributed network with numerous connections to diverse sector-specific legislation, including medical and pharmaceutical legislation, design and trade mark regulations, and taxation and financial services."
        },
        {
          type: "paragraph",
          text: "In contrast, the Data Protection Act 2018 forms a dense, centralised hub with high-volume connections to a smaller number of core acts of legislation, such as the DPA 1998, EU Exit regulations, and Criminal Justice regulations. This suggests that data protection currently takes a more universal, sector-agnostic approach to automated processing, whilst intellectual property law has already sought to address sector-specific nuances."
        },
        {
          type: "heading",
          text: "The Future of Legal Technology"
        },
        {
          type: "paragraph",
          text: "This approach enables rapid, data-driven, and evidence-based analysis of legislation. By applying the full potential of Graph Theory and Network Science, we can look wider and go deeper in legislative analysis, revealing insights that might otherwise remain hidden in the complexity of legal frameworks."
        }
      ]
    },
    'ai-coding-reality': {
      title: "Why Generative AI Coding Tools Don't Always Deliver: A Technical Perspective",
      date: "15th March 2024",
      readTime: "10 min read",
      image: "/assets/ai-coding-tools-blog.svg",
      author: "Aurygen Technologies research team",
      tags: ["Software Development", "AI Tools", "Code Quality", "Professional Standards"],
      content: [
        {
          type: "paragraph",
          text: "The question of whether generative AI tools enhance coding productivity continues to generate significant discussion in the development community. From a strictly technical perspective, our experience reveals several important considerations that every professional developer should understand."
        },
        {
          type: "heading",
          text: "The Speed Paradox"
        },
        {
          type: "paragraph",
          text: "The primary challenge with generative AI coding tools isn't their capability—it's the responsibility factor. Whilst it's straightforward to use these tools to generate code, the reality is that developers remain accountable for every line of code in their projects."
        },
        {
          type: "paragraph",
          text: "This accountability means that AI-generated code cannot be blindly integrated into projects. Thorough review and understanding are essential. Unfortunately, reviewing code often takes as much time as writing it from scratch, if not more. As the industry saying goes: 'it's harder to read code than to write it.'"
        },
        {
          type: "heading",
          text: "Professional Responsibility in the AI Era"
        },
        {
          type: "paragraph",
          text: "Some might argue that AI-generated code can be treated as a black box—as long as it functions correctly, detailed review isn't necessary. This approach is highly problematic for professional development work, particularly when contracts, legal obligations, and financial commitments are involved."
        },
        {
          type: "paragraph",
          text: "Professional developers cannot delegate responsibility to AI systems. The liability for code functionality, security, and maintainability remains with the human developer. Taking shortcuts in code review introduces unacceptable risks to project integrity and client relationships."
        },
        {
          type: "heading",
          text: "The Learning and Growth Factor"
        },
        {
          type: "paragraph",
          text: "Another common argument suggests that generative AI is particularly helpful when working with unfamiliar languages or technologies. However, this perspective overlooks a fundamental aspect of software engineering: continuous learning is not just beneficial—it's essential."
        },
        {
          type: "paragraph",
          text: "Learning new technologies, languages, and frameworks is one of the most rewarding aspects of software development. The more you practise learning, the easier and faster it becomes. Recent projects requiring expertise in Rust, Go, TypeScript, WebAssembly, Java, and C# demonstrate that embracing the learning process leads to better long-term outcomes than delegating it to AI."
        },
        {
          type: "heading",
          text: "AI vs. Human Collaboration"
        },
        {
          type: "paragraph",
          text: "An interesting comparison emerges when considering AI-generated code versus open-source contributions from human developers. Both require thorough review, but human contributions offer something AI cannot: collaborative learning and idea generation."
        },
        {
          type: "paragraph",
          text: "Working with contributors who have genuine interest in projects creates opportunities for innovation and improvement that extend far beyond code generation. These interactions foster creativity and lead to better solutions—benefits that purely automated code generation cannot provide."
        },
        {
          type: "heading",
          text: "A Balanced Perspective"
        },
        {
          type: "paragraph",
          text: "This analysis isn't intended as an anti-AI stance, but rather as a realistic assessment of current capabilities and limitations. Generative AI tools have their place in the development ecosystem, but they work best when developers understand their constraints and maintain professional standards."
        },
        {
          type: "paragraph",
          text: "The future of software development likely involves AI augmentation rather than replacement. Success will come from developers who can effectively leverage these tools whilst maintaining the expertise, responsibility, and creative thinking that define professional software development."
        }
      ]
    },
    'ai-data-protection': {
      title: "Generative AI and Data Protection: Eight Essential Questions for Developers",
      date: "14th March 2024",
      readTime: "12 min read",
      image: "/assets/ai-data-protection-blog.svg",
      author: "Aurygen Technologies research team",
      tags: ["Data Protection", "GDPR", "AI Compliance", "Privacy by Design"],
      content: [
        {
          type: "paragraph",
          text: "As generative artificial intelligence and large language models capture global attention, it's crucial to step back and consider how personal data is being utilised by these powerful technologies. Whilst the technology is novel, the principles of data protection law remain constant—and there's a clear roadmap for organisations to innovate responsibly."
        },
        {
          type: "heading",
          text: "The Regulatory Landscape"
        },
        {
          type: "paragraph",
          text: "Recent developments have seen nearly two thousand academics and technology experts calling for careful consideration of AI development practices. Even industry leaders acknowledge being 'a bit concerned' about the implications of their own creations. This context makes data protection compliance not just legally necessary, but ethically imperative."
        },
        {
          type: "paragraph",
          text: "Organisations developing or using generative AI must consider their data protection obligations from the outset, adopting a data protection by design and by default approach. This isn't optional—if you're processing personal data, it's the law."
        },
        {
          type: "heading",
          text: "Eight Critical Questions for AI Developers"
        },
        {
          type: "subheading",
          text: "1. What is your lawful basis for processing personal data?"
        },
        {
          type: "paragraph",
          text: "If you're processing personal data, you must identify an appropriate lawful basis, such as consent or legitimate interests. This applies even when personal information comes from publicly accessible sources."
        },
        {
          type: "subheading",
          text: "2. Are you a controller, joint controller, or processor?"
        },
        {
          type: "paragraph",
          text: "If you're developing generative AI using personal data, you have obligations as the data controller. If you're using or adapting models developed by others, you may be a controller, joint controller, or processor—each with different responsibilities."
        },
        {
          type: "subheading",
          text: "3. Have you prepared a Data Protection Impact Assessment (DPIA)?"
        },
        {
          type: "paragraph",
          text: "You must assess and mitigate any data protection risks via the DPIA process before you start processing personal data. Your DPIA should be kept up to date as the processing and its impacts evolve."
        },
        {
          type: "subheading",
          text: "4. How will you ensure transparency?"
        },
        {
          type: "paragraph",
          text: "You must make information about the processing publicly accessible unless an exemption applies. If it doesn't take disproportionate effort, you must communicate this information directly to the individuals the data relates to."
        },
        {
          type: "subheading",
          text: "5. How will you mitigate security risks?"
        },
        {
          type: "paragraph",
          text: "In addition to personal data leakage risks, you should consider and mitigate risks of model inversion and membership inference, data poisoning, and other forms of adversarial attacks."
        },
        {
          type: "subheading",
          text: "6. How will you limit unnecessary processing?"
        },
        {
          type: "paragraph",
          text: "You must collect only the data that is adequate to fulfil your stated purpose. The data should be relevant and limited to what is necessary."
        },
        {
          type: "subheading",
          text: "7. How will you comply with individual rights requests?"
        },
        {
          type: "paragraph",
          text: "You must be able to respond to people's requests for access, rectification, erasure, or other information rights."
        },
        {
          type: "subheading",
          text: "8. Will you use generative AI to make solely automated decisions?"
        },
        {
          type: "paragraph",
          text: "If so—and these have legal or similarly significant effects (e.g., major healthcare diagnoses)—individuals have further rights under Article 22 of UK GDPR."
        },
        {
          type: "heading",
          text: "Building Trust Through Compliance"
        },
        {
          type: "paragraph",
          text: "Data protection regulators will be asking these questions of organisations developing or using generative AI. They will act where organisations aren't following the law and considering the impact on individuals."
        },
        {
          type: "paragraph",
          text: "However, regulators are also there to support organisations, enabling them to scale whilst maintaining public trust. Updated guidance on AI and data protection provides a roadmap to compliance for developers and users of generative AI, with accompanying risk toolkits to help identify and mitigate data protection risks."
        },
        {
          type: "paragraph",
          text: "There really can be no excuse for getting the privacy implications of generative AI wrong. The framework exists, the guidance is available, and the expectation is clear: innovate responsibly, with privacy by design at the heart of your AI development process."
        }
      ]
    },
    'ai-security-standards': {
      title: "New ETSI Standards: Protecting AI Systems from Evolving Cyber Threats",
      date: "13th March 2024",
      readTime: "9 min read",
      image: "/assets/ai-security-standards-blog.svg",
      author: "Aurygen Technologies research team",
      tags: ["Cybersecurity", "AI Security", "ETSI Standards", "Threat Protection"],
      content: [
        {
          type: "paragraph",
          text: "As artificial intelligence systems become increasingly prevalent across industries, the need for robust security standards has never been more critical. The European Telecommunications Standards Institute (ETSI) has been developing comprehensive frameworks to protect AI systems from evolving cyber threats."
        },
        {
          type: "heading",
          text: "The Growing Threat Landscape"
        },
        {
          type: "paragraph",
          text: "AI systems face unique security challenges that traditional cybersecurity measures weren't designed to address. These include adversarial attacks that can manipulate AI decision-making, data poisoning that corrupts training datasets, and model extraction attacks that steal intellectual property."
        },
        {
          type: "paragraph",
          text: "The interconnected nature of modern AI systems means that a security breach in one component can have cascading effects across entire networks. This reality has prompted international standards bodies to develop specific guidelines for AI security."
        },
        {
          type: "heading",
          text: "ETSI's Comprehensive Approach"
        },
        {
          type: "paragraph",
          text: "The new ETSI standards take a holistic approach to AI security, addressing the entire lifecycle of AI systems from development through deployment and maintenance. These standards recognise that AI security isn't just about protecting the algorithms—it's about securing the entire ecosystem."
        },
        {
          type: "paragraph",
          text: "Key areas covered by the standards include secure AI development practices, robust testing methodologies for identifying vulnerabilities, incident response procedures specific to AI systems, and continuous monitoring frameworks for detecting anomalous behaviour."
        },
        {
          type: "heading",
          text: "Implementation Challenges and Solutions"
        },
        {
          type: "paragraph",
          text: "Implementing these standards requires organisations to rethink their approach to cybersecurity. Traditional perimeter-based security models are insufficient for AI systems that often operate in distributed environments and process vast amounts of data from multiple sources."
        },
        {
          type: "paragraph",
          text: "The standards emphasise the importance of security by design, requiring organisations to consider security implications from the earliest stages of AI development. This includes secure coding practices, robust data governance, and comprehensive risk assessment procedures."
        },
        {
          type: "heading",
          text: "Industry Collaboration and Adoption"
        },
        {
          type: "paragraph",
          text: "The development of these standards has involved extensive collaboration between industry experts, academic researchers, and government agencies. This collaborative approach ensures that the standards are both technically sound and practically implementable."
        },
        {
          type: "paragraph",
          text: "Early adopters of these standards are already reporting improved security postures and greater confidence in their AI deployments. The standards provide a common framework that enables better communication between security teams, AI developers, and business stakeholders."
        },
        {
          type: "heading",
          text: "Looking Forward"
        },
        {
          type: "paragraph",
          text: "As AI technology continues to evolve, so too must our approach to securing it. The ETSI standards represent a significant step forward, but they're just the beginning. Ongoing research into AI security threats and defensive measures will continue to inform future updates to these standards."
        },
        {
          type: "paragraph",
          text: "Organisations that proactively adopt these standards will be better positioned to leverage AI technology safely and effectively. In an era where AI systems are becoming critical infrastructure, robust security isn't just a technical requirement—it's a business imperative."
        },
        {
          type: "paragraph",
          text: "The message is clear: as we build the AI-powered future, security must be foundational, not an afterthought. The ETSI standards provide the roadmap—now it's up to organisations to follow it."
        }
      ]
    },
    'future-programming': {
      title: "The Future of Programming: Why You Still Need Expertise in the AI Era",
      date: "12th March 2024",
      readTime: "11 min read",
      image: "/assets/future-programming-blog.svg",
      author: "Aurygen Technologies research team",
      tags: ["Programming", "AI Augmentation", "Software Engineering", "Future of Work"],
      content: [
        {
          type: "paragraph",
          text: "The programming landscape is undergoing a fundamental transformation. With the emergence of large language models and AI coding assistants, some have proclaimed that 'the hottest new programming language is English.' But what does this really mean for the future of software development?"
        },
        {
          type: "heading",
          text: "The Promise of Natural Language Programming"
        },
        {
          type: "paragraph",
          text: "Recent developments in AI have introduced the concept of 'vibe coding'—a approach where developers embrace AI assistance and focus less on traditional coding mechanics. Proponents argue that you can build applications by simply describing what you want in natural language, with AI handling the implementation details."
        },
        {
          type: "paragraph",
          text: "This vision is compelling: imagine creating complex applications without needing to master multiple programming languages, frameworks, or intricate technical details. Simply describe your requirements, and AI generates the code."
        },
        {
          type: "heading",
          text: "The Reality Check"
        },
        {
          type: "paragraph",
          text: "However, early experiments with this approach reveal important limitations. When journalists and non-programmers attempt to build applications using AI assistance, they often create solutions that already exist or fail to recognise the complexity of seemingly simple requirements."
        },
        {
          type: "paragraph",
          text: "The fundamental issue isn't the AI's capability—it's the user's understanding of what they're asking for and whether the solution is appropriate, secure, and maintainable. Creating a 'recipe-from-photo' application might seem innovative to someone unfamiliar with existing solutions, but experienced developers recognise this as a well-established use case."
        },
        {
          type: "heading",
          text: "What Programmers Are Learning"
        },
        {
          type: "paragraph",
          text: "Professional programmers who have been experimenting with AI coding assistants are discovering nuanced insights about human-AI collaboration. They're finding that AI can be genuinely helpful for certain tasks—generating boilerplate code, suggesting implementations for well-defined problems, and helping with unfamiliar syntax."
        },
        {
          type: "paragraph",
          text: "However, they're also learning that AI assistance works best when the human programmer has deep expertise. You need to understand what to ask for, how to evaluate the AI's suggestions, and when to reject or modify the generated code."
        },
        {
          type: "heading",
          text: "The Augmentation Model"
        },
        {
          type: "paragraph",
          text: "Rather than replacing programmers, AI is transforming how programming work gets done. The most successful implementations follow an augmentation model where AI handles routine tasks whilst humans focus on architecture, problem-solving, and creative solutions."
        },
        {
          type: "paragraph",
          text: "This transformation mirrors what's happening in other elite professions. AI doesn't eliminate the need for expertise—it changes how that expertise is applied. Doctors still need medical knowledge to interpret AI diagnostic suggestions. Lawyers still need legal expertise to evaluate AI-generated contract clauses."
        },
        {
          type: "heading",
          text: "Skills That Remain Essential"
        },
        {
          type: "paragraph",
          text: "Several core programming skills become even more important in an AI-augmented world: system design and architecture thinking, understanding of performance and security implications, ability to debug and troubleshoot complex issues, knowledge of when and how to integrate different technologies, and critical evaluation of code quality and maintainability."
        },
        {
          type: "paragraph",
          text: "Additionally, programmers need to develop new skills: effective prompt engineering for AI tools, understanding AI limitations and failure modes, and knowing when to rely on AI versus human judgment."
        },
        {
          type: "heading",
          text: "The Collaborative Future"
        },
        {
          type: "paragraph",
          text: "The future of programming isn't about humans versus AI—it's about humans with AI. The most productive developers will be those who can effectively collaborate with AI tools whilst maintaining the critical thinking and deep expertise that define professional software development."
        },
        {
          type: "paragraph",
          text: "This collaborative model offers exciting possibilities: faster prototyping and iteration, reduced time spent on routine tasks, ability to explore more creative solutions, and potential for tackling more complex problems."
        },
        {
          type: "paragraph",
          text: "However, success in this new paradigm requires embracing both the possibilities and the limitations of AI assistance. The programmers who thrive will be those who understand that whilst the tools are changing, the fundamental need for expertise, creativity, and critical thinking remains as important as ever."
        },
        {
          type: "paragraph",
          text: "Programming may be evolving, but it's not disappearing. Instead, it's becoming more strategic, more creative, and more focused on solving complex problems that require human insight and expertise."
        }
      ]
    }
  };



  const blog = blogs[id];

  if (!blog) {
    return (
      <div className="blog-detail-error">
        <h2>Blog not found</h2>
        <button onClick={() => navigate('/')} className="back-button">
          Return to Home
        </button>
      </div>
    );
  }

  const renderContent = (item, index) => {
    switch (item.type) {
      case 'heading':
        return <h2 key={index} className="blog-heading">{item.text}</h2>;
      case 'subheading':
        return <h3 key={index} className="blog-subheading">{item.text}</h3>;
      case 'paragraph':
        return <p key={index} className="blog-paragraph">{item.text}</p>;
      default:
        return null;
    }
  };

  return (
    <div className="blog-detail" ref={ref}>
      <div className={`blog-detail-container ${inView ? 'animate' : ''}`}>
        {/* Header */}
        <div className="blog-detail-header">
          <button onClick={() => navigate('/')} className="back-button">
            ← Back to Home
          </button>
          <div className="blog-detail-meta">
            <span className="blog-detail-date">{blog.date}</span>
            <span className="blog-detail-read-time">{blog.readTime}</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="blog-detail-hero">
          <div className="blog-detail-image">
            <img src={blog.image} alt={blog.title} />
          </div>
          <div className="blog-detail-title-section">
            <h1 className="blog-detail-title">{blog.title}</h1>
            <div className="blog-detail-author">By {blog.author}</div>
            <div className="blog-detail-tags">
              {blog.tags.map((tag, index) => (
                <span key={index} className="blog-detail-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="blog-detail-content">
          {blog.content.map((item, index) => renderContent(item, index))}
        </div>

        {/* Footer */}
        <div className="blog-detail-footer">
          <button onClick={() => navigate('/')} className="back-button-footer">
            ← Return to All Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;