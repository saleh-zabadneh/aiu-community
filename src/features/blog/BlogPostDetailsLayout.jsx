import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Upvote from "./Upvote";
import Downvote from "./Downvote";
import Answer from "./Answer";

const BlogPostDetailsLayout = ({ post }) => {
  const {
    id,
    full_name,
    title,
    content,
    code_snippets,
    upvotes,
    downvotes,
    user_id,
    image,
    date,
    time,
    tags,
    files,
  } = post;
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 py-8 md:px-6 lg:px-8 bg-card">
        <div className="flex items-center max-w-3xl mx-auto space-x-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold">
              {title || "Building a Robust React Component Library"}
            </h1>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <p>{full_name}</p>
              <Separator orientation="vertical" className="h-4" />
              <p>May 15, 2023</p>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 px-4 py-8 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-gray dark:prose-invert">
          <p>
            {content ||
              "Creating a well-designed and maintainable React component library can be a game-changer for your development team. In this article, we will explore the key steps to building a robust and scalable component library that will streamline your development process and ensure consistency across your applications."}
          </p>
          <h2>Defining Your Design System</h2>
          <p>
            The foundation of a successful component library is a well-defined
            design system. This includes establishing a consistent visual
            language, color palette, typography, and UI patterns that will be
            used throughout your applications.
          </p>
          <h2>Implementing Accessible Components</h2>
          <p>
            Accessibility should be a top priority when building your component
            library. Ensure that your components adhere to WCAG guidelines and
            provide a seamless experience for users with disabilities.
          </p>
          <h2>Code Formatting and Linting</h2>
          <pre className="language-javascript">{`
import React from 'react';
import { Button, Input, Textarea } from '@acme/ui';

function MyComponent() {
return (
<div>
  <Button variant="primary">Click me</Button>
  <Input placeholder="Enter text" />
  <Textarea rows={4} placeholder="Write a message" />
</div>
);
}

export default MyComponent;
        `}</pre>
          <p>
            Maintaining a consistent code style is crucial for a component
            library. Integrate tools like Prettier and ESLint to ensure your
            codebase adheres to best practices and is easy to navigate.
          </p>
          <h2>Automated Testing and CI/CD</h2>
          <p>
            Implement a robust testing suite to ensure the reliability and
            stability of your components. Integrate your component library with
            a continuous integration and deployment (CI/CD) pipeline to
            streamline the release process.
          </p>
          <div className="flex items-center space-x-4">
            <Upvote number={upvotes} id={id} />
            <Downvote number={downvotes} id={id} />
          </div>
        </div>
      </main>
      <section className="px-4 py-8 bg-card md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-4 text-2xl font-bold">Comments</h2>
          <div className="space-y-4">
            <Answer id={id} />
            <div className="flex items-start space-x-4">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">Jane Doe</p>
                  <p className="text-sm text-muted-foreground">May 16, 2023</p>
                </div>
                <p className="text-muted-foreground">
                  Great article! I am excited to start building a component
                  library for our team.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">John Smith</p>
                  <p className="text-sm text-muted-foreground">May 17, 2023</p>
                </div>
                <p className="text-muted-foreground">
                  Awesome tips! I will be sure to implement accessibility and
                  automated testing in our component library.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="mb-2 text-xl font-bold">Add a Comment</h3>
            <div className="grid gap-4">
              <Input placeholder="Name" />
              <Textarea rows={4} placeholder="Write your comment..." />
              <Button>Submit</Button>
            </div>
          </div>
        </div>
      </section>
      <footer className="px-4 py-4 bg-muted md:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center max-w-3xl gap-2 mx-auto">
          <Badge variant="secondary" className="hover:bg-secondary/50">
            React
          </Badge>
          <Badge variant="secondary" className="hover:bg-secondary/50">
            Component Library
          </Badge>
          <Badge variant="secondary" className="hover:bg-secondary/50">
            Design System
          </Badge>
          <Badge variant="secondary" className="hover:bg-secondary/50">
            Accessibility
          </Badge>
          <Badge variant="secondary" className="hover:bg-secondary/50">
            Testing
          </Badge>
          <Badge variant="secondary" className="hover:bg-secondary/50">
            CI/CD
          </Badge>
        </div>
      </footer>
    </div>
  );
};

export default BlogPostDetailsLayout;
