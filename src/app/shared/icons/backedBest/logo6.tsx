import { FC } from "react";
import { type TIconProps } from "../type";

export const Logo6: FC<TIconProps> = ({
  className,
  width = 155,
  height = 56,
  color = "#FFFFFF",
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.437 21.73c-.408.029-.815.058-1.223.09v.222l.195-.006c.12-.004.239-.008.358-.008H121.225c.099.002.198.003.297-.004.039-.003.077-.017.142-.041.038-.014.086-.032.148-.053a4.167 4.167 0 0 1-.154-.055c-.069-.026-.112-.043-.157-.048l-2.213-.268c-1.323-.16-2.646-.32-3.968-.484l-.203-.026a243.11 243.11 0 0 1-4.84-.636c-.626-.091-1.25-.2-1.874-.308-.877-.152-1.754-.304-2.637-.409-1.645-.194-3.303-.308-4.958-.401-1.802-.1-3.373-.635-4.63-2.03a9.155 9.155 0 0 0-4.436-2.74c-.746-.208-1.477-.47-2.208-.73-.647-.231-1.293-.462-1.95-.656-1.274-.376-2.574-.502-3.878-.029-.682.248-1.316.042-1.856-.418-.929-.79-1.966-1.403-3.049-1.942-.257-.128-.512-.261-.767-.394-.707-.37-1.415-.74-2.16-.995-1.398-.479-2.747-.363-3.802.882-.181.214-.411.396-.645.551-.475.315-.953.624-1.43.934h-.001c-.648.42-1.297.839-1.936 1.271-.683.463-1.344.963-1.991 1.477-.854.678-1.778.963-2.86.71-.314-.072-.66-.056-.985-.022-.767.079-1.44.429-2.044.883-.369.277-.72.58-1.07.883-.248.213-.495.427-.75.632-1.07.863-2.254 1.161-3.59.714-.541-.181-1.092-.238-1.666-.067-.54.16-1.108.15-1.63-.078-1.057-.462-2.101-.481-3.191-.102-.334.117-.807.146-1.102-.008-.701-.364-1.298-.194-1.871.186-.636.422-1.253.879-1.839 1.37-.53.445-1.116.747-1.756.991-1.452.552-2.965.794-4.495.939-.926.088-1.855.155-2.783.222Zm43.856-3.032-4.47-.117c-.225-.913.319-1.829 1.206-2.048 1.362-.336 3 .744 3.264 2.165Zm-44.199 7.753-.88-.005v.671l.333.1c.265.08.53.16.797.23.181.046.258.124.258.327-.003 1.26-.004 2.519-.004 3.778-.001 1.596-.002 3.191-.008 4.787 0 .105-.088.277-.171.304-.288.094-.583.167-.878.24l-.327.082v.671h3.74c.04-.407-.117-.66-.47-.76-.075-.02-.15-.044-.224-.069a2.777 2.777 0 0 0-.449-.118c-.272-.04-.316-.182-.315-.432a1643.333 1643.333 0 0 0 .005-7.869c0-.042.004-.084.008-.126l.006-.064a72.31 72.31 0 0 1 1.166 3.262l.427 1.257v.002c.523 1.54 1.046 3.078 1.557 4.621.091.276.216.39.495.35a.97.97 0 0 1 .294 0c.289.047.397-.097.485-.36.77-2.285 1.548-4.565 2.327-6.846l.474-1.389c.086-.251.174-.501.263-.752l.122-.346.07.016v7.561c0 .69-.323 1.127-.97 1.309-.361.101-.502.348-.423.74h4.467c.024-.4-.142-.651-.496-.751l-.731-.21-.216-.063v-9.076l1.431-.414v-.655l-.873.002h-.002c-.768.002-1.525.005-2.282-.01-.277-.004-.373.102-.456.35-.794 2.369-1.598 4.735-2.401 7.1l-.386 1.138c-.027.081-.059.16-.097.26l-.075.193-.691-2.137-.001-.002c-.708-2.188-1.402-4.333-2.088-6.482-.097-.302-.218-.428-.555-.42-.752.017-1.504.011-2.256.005Zm21.853 20.213c-1.385-.567-1.913-1.524-1.631-2.954.197-1 .902-1.647 1.95-1.713.296-.018.595.02.894.058.141.019.282.037.423.049.214.019.29.13.276.347-.012.177-.009.355-.006.532l.002.235-.13.049c-.024-.031-.05-.061-.077-.092a1.217 1.217 0 0 1-.155-.206c-.434-.796-1.541-.872-2.097-.14-.543.716-.527 2.328.03 3.035.383.488 1.285.638 1.776.269.09-.068.15-.177.21-.287.03-.057.061-.113.096-.165.052-.075.108-.147.165-.22l.076-.099h.001l.075.02.064.017.001.246c.002.231.005.461-.01.691-.004.063-.114.145-.192.173-.128.047-.262.08-.395.113h-.001l-.164.042H55.947Zm36.302-15.46h-5.294l-.001.001v-3.686l.965-.265c.376-.105.527-.36.451-.769h-4.467c-.058.41.094.665.456.767l.553.156.006.002.408.115V35.562c0 .095.008.199.017.303.023.26.046.524-.071.674-.128.164-.395.222-.657.278a4.024 4.024 0 0 0-.282.068c-.526.155-.553.195-.411.74h4.476c.027-.4-.137-.65-.492-.75a6.119 6.119 0 0 1-.223-.068c-.149-.048-.298-.096-.45-.119-.26-.039-.301-.176-.3-.409.008-.865.007-1.731.006-2.597V32.22h5.333v3.336c0 .704-.33 1.148-.987 1.332-.513.142-.546.207-.388.74h4.442c.034-.403-.126-.653-.48-.752a5.67 5.67 0 0 1-.212-.064 2.788 2.788 0 0 0-.427-.113c-.273-.042-.345-.172-.345-.447.009-2.098.008-4.197.008-6.296V27.86c0-.076.004-.151.01-.23l.005-.11c.33-.092.645-.178.959-.264l.012-.004c.566-.154.566-.157.444-.773h-4.438c-.064.413.082.67.438.772l.291.083.645.183v3.686ZM80.68 37.755V28.61c0-.095-.006-.197-.013-.3-.02-.282-.04-.57.086-.747.11-.156.372-.204.632-.251.11-.02.218-.04.316-.068.524-.15.532-.162.414-.762h-3.77c-.044.413.11.669.461.768l.948.266v7.142l-.113-.174c-.057-.088-.104-.16-.148-.232-.388-.633-.78-1.264-1.17-1.895-1.005-1.62-2.01-3.241-2.962-4.893-.453-.784-.933-1.144-1.841-1.029-.492.063-.994.047-1.492.032-.221-.007-.442-.014-.66-.014-.119.632-.116.638.424.79.168.049.336.096.506.144l.48.136v8.012c0 .096.007.2.016.303.021.27.043.546-.078.709-.12.162-.385.216-.647.27-.103.02-.204.041-.297.068l-.012.004c-.495.144-.496.144-.404.733h3.795c.046-.397-.103-.644-.447-.739a6.28 6.28 0 0 1-.23-.07c-.148-.046-.294-.093-.444-.118-.267-.044-.355-.161-.353-.444.008-1.911.008-3.823.007-5.735v-2.243c0-.056.007-.112.017-.189l.018-.163.104.166.135.218 1.408 2.268c1.38 2.22 2.759 4.439 4.112 6.674.307.508.636.65 1.202.509Zm-11.76-1.794c.831-1.17 1.166-2.472 1.163-3.887v-.001l.091-.017c-.045-.242-.082-.488-.118-.734-.08-.541-.16-1.082-.337-1.589-.742-2.128-2.23-3.407-4.499-3.545-2.11-.13-3.758.78-4.727 2.678-1.067 2.092-1.067 4.285-.011 6.38 1.778 3.53 6.487 3.467 8.439.715Zm-7.43-3.381c-.02-.205-.04-.41-.063-.613v-.001c.043-.991.13-1.964.49-2.892.534-1.379 1.56-2.086 3.003-2.08 1.474.007 2.484.716 3.002 2.128.445 1.213.514 2.478.378 3.745-.082.77-.22 1.553-.476 2.279-.462 1.311-1.47 1.961-2.825 1.973-1.463.011-2.448-.608-2.99-1.915a5.299 5.299 0 0 1-.348-1.17 23.868 23.868 0 0 1-.172-1.454Zm-13.746-.512c-.03-1.571.362-3.003 1.4-4.205 2.257-2.613 6.475-2.167 8.13.912 1.12 2.088 1.131 4.295.085 6.41-1.02 2.062-2.784 2.921-5.048 2.742-1.906-.15-3.623-1.567-4.237-3.587-.152-.5-.231-1.023-.31-1.546-.035-.237-.07-.473-.113-.708l.023-.004.023-.005.017-.002.03-.006Zm8.581-.111c.005-1.037-.09-2.057-.496-3.025-.545-1.298-1.534-1.917-2.913-1.935-1.392-.018-2.439.623-2.941 1.932a8.25 8.25 0 0 0-.478 2.087c-.139 1.341-.059 2.682.4 3.967.516 1.443 1.524 2.14 3.025 2.136 1.47-.004 2.453-.715 2.97-2.158.348-.97.43-1.982.433-3.004Zm57.547 4.926c-.343.097-.49.348-.441.754l.001-.001h8.077l.103-1.4.001-.018.1-1.369c-.313-.097-.505-.043-.611.259-.051.144-.125.28-.199.416l-.08.15c-.059.112-.109.239-.16.365-.116.292-.233.583-.446.712-.23.139-.559.115-.884.092a4.934 4.934 0 0 0-.375-.017c-.578.004-1.156.003-1.74.002h-.74v-9.296l.037-.02a.202.202 0 0 1 .047-.02l.432-.116c.188-.05.376-.1.564-.152.503-.136.548-.228.375-.75h-4.483c-.125.598-.112.622.417.773l.663.187h.002l.316.089v8.058c0 .685-.326 1.119-.976 1.302Zm-7.131-.056h.753c.959.001 1.903.002 2.847-.01.097-.001.231-.12.281-.217.249-.485.49-.974.701-1.476.118-.28.281-.386.618-.278l-.092 1.698-.058 1.08h-8.063c-.08-.392.06-.639.42-.741.648-.182.972-.618.972-1.307V27.52l-.362-.102-.586-.165c-.354-.1-.509-.357-.465-.77h4.463c.064.411-.092.668-.468.771l-.575.16h-.003l-.384.106v9.307l.001-.001Zm-4.916.816h.001l-.001.001v-.002Zm-.473-.762c.354.098.511.352.473.761h-4.469c-.137-.575-.118-.602.416-.757.09-.026.19-.046.29-.066.253-.05.51-.101.62-.256.123-.173.105-.452.087-.725a4.366 4.366 0 0 1-.013-.282c.003-1.839.002-3.678.002-5.517v-2.513L98 27.312l-.214-.06c-.363-.103-.512-.358-.445-.768h4.467c.073.409-.067.663-.419.761-.211.06-.423.117-.641.177l-.376.104v.378l.001 1.9c.001 2.14.002 4.278-.009 6.416-.002.313.089.45.385.495.138.021.274.064.409.107l.194.059Zm-37.99 5.196c.463-.044.775.133.938.53.135.329.272.658.409.986v.001c.3.722.6 1.444.89 2.171.101.255.227.414.501.466.06.012.111.076.162.14.022.03.045.06.069.083-.029.012-.058.027-.087.043a.458.458 0 0 1-.19.067c-.441.012-.884.012-1.326 0a.428.428 0 0 1-.185-.07c-.029-.016-.057-.032-.086-.044l.07-.074a.966.966 0 0 1 .165-.152c.054-.035.12-.054.185-.073l.089-.028-.002-.016v-.013l-.001-.02a.246.246 0 0 0-.009-.073c-.177-.521-.538-.782-1.084-.782h-.074c-.571 0-.948.298-1.13.894.043.014.087.026.131.039.104.029.208.058.305.103.042.02.071.07.1.119l.01.017.007.012a.508.508 0 0 0 .023.035.67.67 0 0 0-.058.048c-.042.038-.084.075-.126.077-.405.01-.811.012-1.217 0-.04-.001-.081-.041-.122-.081-.018-.019-.037-.038-.056-.052a.76.76 0 0 0 .046-.069c.034-.053.067-.106.103-.108.386-.013.484-.288.582-.564l.01-.031.028-.076c.154-.405.305-.81.457-1.216l.001-.001.378-1.007c.165-.438.197-.865.094-1.28v-.001Zm-.238 2.733c.208-.59.406-1.156.642-1.832l.244.621.003.007v.002l.472 1.203h-1.36Zm29.8 1.25.008.056h.001l-.095.03a1.006 1.006 0 0 0-.21.077 1.123 1.123 0 0 0-.182.138l-.08.067c.03.015.061.034.091.053.066.04.13.082.197.084.442.015.885.012 1.328.001a.452.452 0 0 0 .187-.067c.028-.015.056-.03.084-.041a.992.992 0 0 1-.067-.083c-.05-.066-.098-.131-.157-.142-.28-.047-.405-.214-.505-.464-.308-.768-.625-1.533-.941-2.297l-.373-.9c-.162-.395-.478-.551-.946-.469.302.44.13.825-.04 1.21a4.66 4.66 0 0 0-.119.286c-.143.39-.292.78-.44 1.168a112.175 112.175 0 0 0-.342.902c-.098.284-.195.564-.584.595-.046.004-.102.121-.114.192-.004.029.097.107.151.109.406.009.813.009 1.218 0 .056-.002.16-.071.157-.101-.007-.071-.049-.171-.105-.2-.098-.047-.205-.077-.311-.108a4.677 4.677 0 0 1-.129-.038c.15-.598.508-.897 1.076-.897h.11c.547 0 .918.255 1.116.764a.347.347 0 0 1 .015.076Zm-1.226-3.08.753 1.83h-1.405l.06-.17.593-1.66Zm-20.46 1.597v1.543l.07.017.05.011c.104.024.212.049.312.093.056.026.1.082.143.137.02.026.039.05.06.073-.026.012-.05.028-.075.044-.053.034-.106.068-.16.07-.479.01-.958.01-1.437 0-.05-.002-.1-.04-.15-.077-.024-.017-.048-.035-.071-.048.017-.021.033-.044.05-.067.037-.052.074-.104.124-.13.083-.04.175-.065.27-.09.04-.01.08-.02.12-.032v-3.604a2.796 2.796 0 0 0-.123-.036 1.434 1.434 0 0 1-.286-.103c-.047-.025-.079-.08-.11-.137-.014-.026-.028-.05-.044-.073.021-.012.042-.028.063-.044.045-.033.09-.067.135-.066.184.003.37.003.555.003.54 0 1.08 0 1.613.056.713.074 1.135.602 1.117 1.249-.018.637-.521 1.147-1.224 1.206a6.385 6.385 0 0 1-.678.01 14.969 14.969 0 0 0-.324-.005Zm0-.314c.084-.002.169 0 .253 0 .443.008.865.014 1.143-.419a.915.915 0 0 0-.01-1.053c-.288-.42-.704-.4-1.13-.38-.086.003-.171.007-.257.008v1.844Zm12.73-1.827c.074.002.148.005.223.005v3.68l-.136.039a1.79 1.79 0 0 0-.3.101c-.06.028-.106.121-.118.192-.005.03.093.11.145.112a46.42 46.42 0 0 0 1.511 0c.056-.001.159-.08.154-.106-.012-.072-.058-.166-.116-.193a2.067 2.067 0 0 0-.318-.108l-.12-.035v-3.649c.528-.067.907.123 1.136.57.006.01.011.024.016.036a.148.148 0 0 0 .033.062c.042.037.115.097.14.083.052-.029.111-.099.113-.153.008-.247.007-.494.006-.743v-.25H82.77v1.145a8.723 8.723 0 0 1 .11.05c.03-.056.06-.113.088-.17.07-.135.139-.27.22-.396.066-.103.163-.24.262-.255.168-.027.34-.022.518-.017Zm15.184 3.78.354.002c.346.002.683.004 1.02-.011.078-.003.169-.117.221-.202.089-.145.168-.296.247-.447l.001-.001.091-.172.044.016.045.016.001.25v.002c.002.252.003.505-.011.756-.003.052-.136.136-.21.137-.946.01-1.892.01-2.838 0-.049 0-.098-.04-.147-.082a.724.724 0 0 0-.067-.052.804.804 0 0 0 .057-.073c.041-.055.082-.111.127-.115.367-.03.398-.25.393-.56-.013-.755-.01-1.51-.009-2.278v-.003l.002-.885c-.041-.013-.083-.025-.125-.036a1.43 1.43 0 0 1-.282-.098c-.049-.025-.082-.08-.116-.135-.015-.025-.03-.05-.047-.072.02-.013.041-.03.062-.046.043-.035.087-.07.132-.07.479-.01.958-.01 1.437 0 .044 0 .086.036.129.072.02.016.039.033.059.046-.017.022-.033.05-.05.078-.034.06-.07.121-.11.124-.426.03-.442.3-.435.643.012.653.01 1.307.008 1.96 0 .279-.002.557-.001.835 0 .081.004.163.01.256l.007.144.001.002Zm-20.684-.061-.138-.04-.001-.001v-3.598a5.36 5.36 0 0 1 .138-.04c.111-.032.219-.063.319-.11.057-.028.1-.127.108-.198.003-.033-.095-.109-.148-.11-.415-.006-.83-.005-1.25-.005h-.338c-.002.034-.008.068-.012.098-.009.056-.015.1 0 .111.119.078.245.147.372.216l.122.067v3.576c-.04.014-.079.026-.118.038-.094.029-.186.057-.267.103-.057.032-.098.129-.105.2-.003.03.1.101.157.102.479.008.958.008 1.437 0 .053 0 .154-.076.15-.106-.01-.071-.053-.168-.11-.195a1.996 1.996 0 0 0-.316-.108Z"
        fill={color}
      />
    </svg>
  );
};
