//
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yXzeCwrL5OK
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

export default function CourseProjectCard({ project }) {
  const { id, instructor, project_name, description, submission_due_date } =
    project;

  return (
    <Link
      to={`/students/it/courses/projects/project-details/${id}`}
      className="group"
      prefetch={false}
    >
      <Card className="transition-all  duration-300 shadow-[0px_8px_46px_3px_rgba(153,_64,_156,_0.2)] bg-card text-card-foreground hover:scale-105 hover:shadow-lg">
        <CardContent className="p-6 space-y-4">
          <div>
            <h2 className="text-xl font-semibold">{project_name}</h2>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>Dr</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{instructor}</p>
              <p className="text-sm text-muted-foreground">
                {submission_due_date}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
