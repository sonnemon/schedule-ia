import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

async function AppPage() {
  const session = await auth();

  return (
    <div>
      AppPage
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <form
        action={async () => {
          "use server";
          signOut();
        }}
      >
        <Button type="submit">Sign Out</Button>
      </form>
    </div>
  );
}

export default AppPage;
