/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UEJGquQAktA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function StudentServiceDetailsCard({ service }) {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex items-center justify-between px-4 py-3 border-b bg-background">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={service.image} />
            <AvatarFallback>{service.full_name}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold">{service.full_name}</h3>
            <p className="text-sm text-muted-foreground">{service.faculty}</p>
          </div>
        </div>
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <MoveHorizontalIcon className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <FilePenIcon className="w-4 h-4 mr-2" />
              Edit Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOutIcon className="w-4 h-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </header>
      <div className="px-4 md:px-6">
        <div className="grid gap-6">
          <div>
            <h2 className="text-2xl font-bold">{service.title}</h2>
            <p className="text-muted-foreground">{service.content}</p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="grid gap-2">
                {/* {service.files &&
                  service.files
                    .filter((file) => file.type !== "image")
                    .map((file) => (
                      <Card
                        key={file.id}
                        className="flex items-center justify-between p-4"
                      >
                        <div className="flex items-center gap-3">
                          {file.type === "pdf" && (
                            <FileIcon className="w-6 h-6 text-red-500" />
                          )}
                          {file.type === "excel" && (
                            <FileSpreadsheetIcon className="w-6 h-6 text-green-500" />
                          )}
                        </div>
                        <Button variant="ghost" size="icon">
                          <DownloadIcon className="w-5 h-5" />
                        </Button>
                      </Card>
                    ))} */}
              </div>
            </div>
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Images</h3>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {/* {service.files &&
                  service.files
                    .filter(
                      (file) => file.type === "jpeg" || "jpg" || "png" || "svg"
                    )
                    .map((file) => (
                      <img
                        key={file.id}
                        src={file.path}
                        width={300}
                        height={200}
                        alt={file.name}
                        className="rounded-lg object-cover aspect-[3/2]"
                      />
                    ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DownloadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function FileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}

function FilePenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function FileSpreadsheetIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M8 13h2" />
      <path d="M14 13h2" />
      <path d="M8 17h2" />
      <path d="M14 17h2" />
    </svg>
  );
}

function LogOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}

function MoveHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}
